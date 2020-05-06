import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
//import {Form} from 'react-bootstrap';
//import Icon from '@material-ui/core/Icon';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import Alert from '../Layout/Alert';
import classes from './Profile-Form.module.css';
import {createProfile} from '../../action/profile';
import CompLocalSection from '../CompSection/CompLocalSection/CompLocalSection';
import CompDiv from '../CompSection/CompDiv/CompDiv';



const CreateProfile = ({createProfile, history}) => {
    const [formData, setFormData] = useState({
       
        company: '',
        website: '',
        location: '',
        status: '',
        skills: '',
        githubusername: '',
        bio: '',
        twitter: '',
        facebook: '',
        linkedin: '',
        youtube: '',
        instagram: ''
        
    });

    const [displaySocialInputs, toggleSocialInputs] = useState(false);


    const {
       
        company,
        website,
        location,
        status,
        skills,
        githubusername,
        bio,
        twitter,
        facebook,
        linkedin,
        youtube,
        instagram
    } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
       e.preventDefault();
       createProfile(formData, history)
    }

    return (

      
       
          <Fragment>
            
            <CompLocalSection>
              
              <CompDiv>
            <div className={classes.CreateProfileForm}>
             <h1 className={classes.Title}>
          Create Your Profile
        </h1>
        
        <p className="lead">
          <i className="fas fa-user" /> Let's get some information to make your
          profile stand out
        </p>
        <small>* = required field</small>
      <form className={classes.FormBasicInfo}  onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <select name="status"  value={status} onChange={e => onChange(e)} className={classes.FormGrup}>
              <option className={classes.Option} value={0}>* Select Professional Status</option>
              <option className={classes.Option} value="Developer">Developer</option>
              <option className={classes.Option} value="Junior Developer">Junior Developer</option>
              <option className={classes.Option} value="Senior Developer">Senior Developer</option>
              <option className={classes.Option} value="Manager">Manager</option>
              <option className={classes.Option} value="Student or Learning">Student or Learning</option>
              <option className={classes.Option} value="Instructor">Instructor or Teacher</option>
              <option className={classes.Option} value="Intern">Intern</option>
              <option className={classes.Option} value="Other">Other</option>
            </select>
            <small className="form-text">Give us an idea of where you are at in your career</small>
          </div>
          
            
          <div className="form-group">
           <input 
           type="text" 
           placeholder="Company" 
           name="company" 
           className={classes.inputForm}  
           value={company}
           onChange={e => onChange(e)}/>
            <small className="form-text">Could be your own company or one you work for</small>
          </div>
          <div className="form-group">
            <input 
            type="text" 
            placeholder="Website" 
            name="website" 
            className={classes.inputForm}
            value={website}
            onChange={e => onChange(e)}/> 
            <small className="form-text">Could be your own or a company website</small>
          </div>
          <div className="form-group">
            <input 
            type="text" 
            placeholder="Location" 
            name="location" 
            className={classes.inputForm}
            value={location}
            onChange={e => onChange(e)}/>
            <small className="form-text">City &amp; state suggested (eg. Boston, MA)</small>
          </div>
          <div className="form-group">
            <input 
            type="text" 
            placeholder="* Skills" 
            name="skills" 
            className={classes.inputForm}
            value={skills}
            onChange={e => onChange(e)}/>
            <small className="form-text">Please use comma separated values (eg.
              HTML,CSS,JavaScript,PHP)</small>
          </div>
          <div className="form-group">
            <input 
            type="text" 
            placeholder="Github Username" 
            name="githubusername" 
            className={classes.inputForm}
            value={githubusername}
            onChange={e => onChange(e)}/>
            <small className="form-text">If you want your latest repos and a Github link, include your
              username</small>
          </div>
          <div className="form-group">
            <textarea 
            className={classes.inputForm1}
            placeholder="A short bio of yourself" 
            name="bio" 
            value={bio}
            onChange={e => onChange(e)}/>
            <small className="form-text">Tell us a little about yourself</small>
          </div>
          <div className="my-2">
            <button 
            onClick={() => toggleSocialInputs(!displaySocialInputs)}
            type="button" 
            className="btn btn-dark">
              Add Social Network Links
            </button>
            <span>Optional</span>
          </div>

          {displaySocialInputs && 
          <Fragment>

          <div className="form-group social-input">
            < TwitterIcon color="primary"/>
            <input 
            type="text" 
            placeholder="Twitter URL" 
            name="twitter" 
            className={classes.inputForm}
            value={twitter}
            onChange={e => onChange(e)} />
          </div>
          <div className="form-group social-input">
             <FacebookIcon color="primary"/>
            <input 
            type="text" 
            placeholder="Facebook URL" 
            name="facebook" 
            className={classes.inputForm}
            value={facebook}
            onChange={e => onChange(e)}/>
          </div>
          <div className="form-group social-input">
            <YouTubeIcon color="secondary" />
            <input 
            type="text" 
            placeholder="YouTube URL" 
            name="youtube"
            className={classes.inputForm} 
            value={youtube}
            onChange={e => onChange(e)}/>
          </div>
          <div className="form-group social-input">
            <LinkedInIcon color="primary" />
            <input 
            type="text" 
            placeholder="Linkedin URL" 
            name="linkedin" 
            className={classes.inputForm}
            value={linkedin}
            onChange={e => onChange(e)}/>
          </div>
          <div className="form-group social-input">
            <InstagramIcon color="primary"/>
            <input 
            type="text" 
            placeholder="Instagram URL" 
            name="instagram" 
            className={classes.inputForm}
            value={instagram}
            onChange={e => onChange(e)}/>
          </div>
          </Fragment>
          }
          <input type="submit" className="btn btn-dark " /> {' '}
          <Link className="btn btn-light " to="/dashboard">Go Back</Link>
        </form>
        </div>
        </CompDiv>
        <Alert/>
        </CompLocalSection>
        
    </Fragment>
    )

  }


CreateProfile.propTypes = {
   createProfile: PropTypes.func.isRequired,
   
}



export default  connect(null, {createProfile})(withRouter(CreateProfile));
