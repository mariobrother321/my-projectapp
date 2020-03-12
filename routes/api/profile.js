const express = require('express');
const app = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator')
const request = require('request');
const config = require('config')

const Profile = require('../../models/Profile');
const User = require('../../models/User');

// @route          GET api/profile/me
//@description     get current user profile
//@acces           Private
app.get('/me', auth, async (req, res) => {
     try {
        const profile = await Profile.findOne({ user: req.user.id}).populate('user',['name', 'avatar']);

        if(!profile) {
            return res.status(400).json({ msg: 'There is no profile for this User'});
        }
        res.json(profile);
     } catch(err) {
         console.error(err.message);
         res.status(500).send('Server Error');
     }
});
 
// @route          Post api/profile
//@description     create or update user profile
//@acces           Private

app.post('/', [auth, 
 [ 
    check('status', 'Status is required')
    .not()
    .isEmpty(),
    check('skills', 'Skills is required')
    .not()
    .isEmpty()
 ]
], 
  async (req, res) => {
      const errors = validationResult(req);
      if(!errors.isEmpty()) {
          return res.status(400).json( {errors: errors.array() });
        }

      const {
          company,
          website,
          location,
          bio,
          status,
          githubusername,
          skills,
          youtube,
          twitter,
          facebook,
          instagram,
          linkedin
      } = req.body;

       //Build profile object
    const profileFields = {};
    profileFields.user = req.user.id;
    
    if (company) profileFields.company = company;
    if (website) profileFields.website = website;
    if (location) profileFields.location = location;
    if (bio) profileFields.bio = bio;
    if (status) profileFields.status = status;
    if (githubusername) profileFields.githubusername = githubusername;
    // Skills - Spilt into array
      if(skills) {
        profileFields.skills = skills.split(',').map(skill => skill.trim());
    }

    //build social object
    profileFields.social = {};
    if (youtube) profileFields.social.youtube = youtube;
    if (twitter) profileFields.social.twitter = twitter;
    if (facebook) profileFields.social.facebook = facebook;
    if (linkedin) profileFields.social.linkedin = linkedin;
    if (instagram) profileFields.social.instagram = instagram;
 
    try {
        let profile = await Profile.findOne({ user: req.user._id});

        if(profile) {
            //Update
            profile = await Profile
            .findByIdAndUpdate(
                { user: req.user.id},
                { $set: profileFields},
                { new: true }
                );

                return res.json(profile);
        }

        // Create
      profile = new Profile(profileFields);
      await profile.save();
      res.json(profile);

    } catch(err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}
   
);

// @route          GET api/profile
//@description     Get all profiles
//@acces           Public

app.get('/', async (req, res) => {
    try {
        const profiles = await Profile
        .find()
        .populate(
         'user',
        [ 'name', 'avatar']);
        res.json(profiles);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route          GET api/profile/user/user_id
//@description     Get all profile by user ID
//@acces           Public

app.get('/user/:user_id', async (req, res) => {
    try {
        const profile = await Profile
        .findOne({ user: req.params.user_id })
        .populate(
         'user',
        [ 'name', 'avatar']);

      if(!profile) 
        return res.status(400)
        .json({msg:'Profile not found'});

        res.json(profile);
        
    } catch (err) {
        console.error(err.message);
        if(err.kind == 'ObjectId') 
          return res.status(400)
         .json({msg:'Profile not found'}); 
        
        res.status(500).send('Server Error');
    }
});

// @route          DELETE api/profile
//@description     Delete profile,user & posts
//@acces           Private

app.delete('/', auth, async (req, res) => {
    try {
         // remove users posts

        // remove profile
     await Profile.findOneAndRemove({ user: req.user.id});
        // remove user
     await User.findOneAndRemove({ _id: req.user.id});

        res.json({ msg: 'User deleted'});

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


// @route          PUT api/profile/EXPERIENCE
//@description     Add profile experience
//@acces           Private

app.put(
    '/experience', [auth, [
    check('title', 'Title is required')
    .not()
    .isEmpty(),
    check('company', 'Company is required')
    .not()
    .isEmpty(),
    check('from', 'From date is required')
    .not()
    .isEmpty()
] ], async (req, res) => {
   const errors = validationResult(req);
   if(!errors.isEmpty()) {
       return res.status(400).json({ errors: errors.array() });
   }
    const {
        title,
        company,
        location,
        from,
        to,
        current,
        description
      } = req.body;

    const newExp = {
        title,
        company,
        location,
        from,
        to,
        current,
        description
    }
    
    try {
        const profile = await Profile.findOne({ user: req.user.id});

        profile.experience.unshift(newExp);
         await profile.save();
         res.json(profile);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }

  }
);

// @route          DELETE api/profile/EXPERIENCE/exp_id
//@description     Delete experience from profile
//@acces           Private

app.delete('/experience/:exp_id' , auth, async (req, res) => {
     try {
        const profile = await Profile.findOne({ user: req.user.id});
      
       // Get remove index
       
       const removeIndex = profile.experience.map(item => item.id)
       .indexOf(req.params.exp_id);

       profile.experience.splice(removeIndex, 1);
       await profile.save();

       res.json(profile);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
     }
});


// @route          PUT api/profile/education
//@description     Add profile education
//@acces           Private

app.put(
    '/education', [auth, 
 [
    check('school', 'School is required')
    .not()
    .isEmpty(),
    check('degree', 'Degree is required')
    .not()
    .isEmpty(),
    check('fieldofstudy', 'Field of study is required')
    .not()
    .isEmpty(),
    check('from', 'From date is required')
    .not()
    .isEmpty()
 ] 
], async (req, res) => {
   const errors = validationResult(req);
   if(!errors.isEmpty()) {
       return res.status(400).json({ errors: errors.array() });
   }
    const {
        school,
        degree,
        fieldofstudy,
        from,
        to,
        current,
        description
      } = req.body;

    const newEdu = {
        school,
        degree,
        fieldofstudy,
        from,
        to,
        current,
        description
    }
    
    try {
        const profile = await Profile
        .findOne({ user: req.user.id});

        profile.education.unshift(newEdu);
         await profile.save();
         res.json(profile);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }

  }
);

// @route          DELETE api/profile/education/edu_id
//@description     Delete education from profile
//@acces           Private

app.delete('/education/:edu_id' , auth, async (req, res) => {
     try {
        const profile = await Profile.findOne({ user: req.user.id});
      
       // Get remove index
       
       const removeIndex = profile.education.map(item => item.id)
       .indexOf(req.params.edu_id);

       profile.education.splice(removeIndex, 1);
       await profile.save();

       res.json(profile);
       
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
     }
});

// @route          Get api/profile/github/:username
//@description     get user repos from github
//@acces           Public

app.get('/github/:username', (req, res) => {
    try {
        const options = {
           uri: `http://api.github.com/users/${req.params.username}/repos?per_page=5&
           sort=created:asc&client_id=${config.get('githubClientId')}&client_secret=
           ${config.get('githubSecret')}`,
           metthod: 'GET',
           headers: {'user-agent': 'node.js'}

        };

        request(options, (error, response, body) => {
            if(error) console.error(error);

            if(response.statusCode !== 200) {
             return res.status(404).json({msg: 'No Github profile found'});
            }
            res.json(JSON.parse(body));
        });

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = app;