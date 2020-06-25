import React from 'react'
import PropTypes from 'prop-types'
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import LanguageIcon from '@material-ui/icons/Language';
//import EmailIcon from '@material-ui/icons/Email';
import CompDiv from '../../CompSection/CompDiv/CompDiv';
//import User1 from '../../../assets/images/teammember13.jfif';
import classes from './ProfileTop.module.css';
import Avatar from 'react-avatar';
import { connect } from 'react-redux';




const ProfileTop = ({ auth, profile: {
    status,
    company,
    location,
    website,
    social,
    user
}}) => {
    return (
        <CompDiv>
             <div className={classes.ProfileTop}>
            
             <i className="" ><Avatar src={`https://warm-earth-24313.herokuapp.com/${user.userImage}`} 
             size="150px" 
             round="50%" 
             alt=""/></i>
    <h1 className="medium">{user.name}</h1>
    <p className="lead">{status} {company && <span>at {company}</span>}</p>
    <p>{location && <span>{location}</span>}</p>
        <div className="icons my-1">

          {website && (
               <a href={website} target="_blank" rel="noopener noreferrer">
               <LanguageIcon color="primary" />
             </a>
          )}{' '}
           
           {social && social.twitter && (
                 <a href="http://www.twitter.com" target="_blank" rel="noopener noreferrer">
                 <TwitterIcon color="primary"/>
               </a>
           )}{' '}

           {social && social.facebook && (
                 <a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer">
                 <FacebookIcon  color="primary"/>
               </a> )}{' '}

            {social && social.linkedin && (
                 <a href="http://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                 <LinkedInIcon color="primary" />
               </a>
            )}{' '}

            {social && social.youtube && (
                 <a href="http://www.youtube.com" target="_blank" rel="noopener noreferrer">
                 <YouTubeIcon  color="secondary"/>
               </a>
            )}{' '}

            {social && social.youtube && (
                   <a href="http://www.instagram.com" target="_blank" rel="noopener noreferrer">
                   <InstagramIcon color="primary" />
                 </a>
            )}{' '}

        
        </div>
      </div>
        </CompDiv>
    )
}

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired,
}


const mapStateToProps = state => ({
  auth: state.auth,
  //profile: state.profile,
  //user: state.user
});




export default connect(mapStateToProps)(ProfileTop)
