const express = require('express');
const app = express.Router();
const gravatar = require('gravatar');
const jwt = require('jsonwebtoken');
const config = require('config');
const bcrypt = require('bcryptjs');
const mongoose = require("mongoose");
const multer = require('multer');
//let upload = multer({dest:'uploads/'})
const { check, validationResult } = require('express-validator');
const path = require('path');
//const auth = require('../../middleware/auth')



const storage = multer.diskStorage({
  destination: function(req, file, cb) {
   cb(null,'userimages/');
   
  },
  filename: function(req, file, cb) {
    cb(null, new Date().getTime()+ "-" + file.originalname);
  }
});
  //filename: function(req, file, cb) {
   // cb(null,file.originalname)
  //}
//});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});

const User = require('../../models/User');




app.get("/", (req, res, next) => {
   User.find()
      .select("name email password userImage date")
      .exec()
      .then(docs => {
        const response = {
          count: docs.length,
          users: docs.map(doc => {
            return {
              name: doc.name,
              email: doc.email,
              password: doc.password,
              userImage: doc.userImage,
              request: {
                type: "GET",
                url: "http://localhost:5000/api/users" + doc._id
              }
            };
          })
        };
        //   if (docs.length >= 0) {
        res.status(200).json(response);
        //   } else {
        //       res.status(404).json({
        //           message: 'No entries found'
        //       });
        //   }
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  });
  

// @route          Post api/users
//@description     Register user
//@acces           Public

app.post('/', upload.single('userImage'),
              //auth,
    [
    check('name', 'Name is Required')
    .not()
    .isEmpty(),
    check('email', 'Please provide a valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters').isLength({min: 6})
    ],
     async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array() });
    }
    
  const {email,password}= req.body

    try {
// see if the user exists
let user = await User.findOne({ email });

if(user) {
   return res.status(400).json({errors: [{msg: 'User already exists'}] });
}
 //if(!upload) {
    //upload(req, res, err => {
        //if (err) {
            //return res.json({ success: false, err })
        //}
        //return res.json({ success: true, image: res.req.file.path, fileName: res.req.file.filename })
    //})

 //}


//get users gravatar
const avatar = gravatar.url(email, {
     s: '200',
     r: 'pg',
     d: 'mm'
});

user = new User({
  name: req.body.name,
  email: req.body.email,
  password: req.body.password,
  avatar:req.body.avatar,
  userImage: req.file.path 
});
//encrypt password
const salt = await bcrypt.genSalt(10);
user.password = await bcrypt.hash(password, salt);

 await user.save().then(user => {
  console.log(user);
  res.status(201).json({
    message: " User created successfully",
    user: {
        name: user.name,
        email: user.email,
        password: user.password,
        userImage: user.userImage,
        request: {
            type: 'GET',
            url: "http://localhost:5000/api/users/" + user._id
        } 
      }
      })
    });

 //return jsonwebtoken

const payload = { 
    user : {
       id: user.id
 }
   }
 

jwt.sign(
    payload,
    config.get('jwtSecret'),
    {expiresIn: 360000},
    (err, token) => {
       if(err) throw err ;
       res.json({ token });
      }
    );

    } catch(err) {
     console.error(err.message);
     res.status(500).send('Server Error');
    }
});



module.exports = app;