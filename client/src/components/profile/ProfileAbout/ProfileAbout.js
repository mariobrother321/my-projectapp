import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
//import CompDiv from '../../CompSection/CompDiv/CompDiv';
import CheckIcon from '@material-ui/icons/Check';
import classes from './ProfileAbout.module.css';


const ProfileAbout = ({ 
    profile:{
      bio,
      skills,
      user: {name}
} 
}) => {
    return (
   
        <div className={classes.ProfileAbout}>

          {bio && (
              <Fragment>
                   <div className={classes.Bio}>
                     
          <h3 className="text-disabled">{name.trim().split(' ')[0]} s Bio</h3>
                 <p>
                   {bio}
                 </p>
                 <div className={classes.Line}></div>
                 </div>
              </Fragment>
          )}

          
          <h3 className="text-disabled">Skill Set</h3>
          <div className={classes.Skills}>
             
             {skills.map((skill, index) => (
               <div key={index} className={classes.P1}>
                  <CheckIcon />{skill}
               </div>
             ))}
          </div>
        </div>


    )
}

ProfileAbout.propTypes = {
   profile: PropTypes.object.isRequired,
}

export default ProfileAbout
