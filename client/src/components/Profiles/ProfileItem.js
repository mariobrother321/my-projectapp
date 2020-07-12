import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//import {connect} from 'react-redux';
//import CompDiv from '../CompSection/CompDiv/CompDiv';
import classes from './ProfileItem.module.css';
import CheckIcon from '@material-ui/icons/Check';
import Avatar from 'react-avatar';



const ProfileItem = ({
  profile: {
    user: {_id, name, avatar,userImage},
    status,
    company,
    location,
    skills
  },
 
}) => {
  return (
    
      <div className={classes.Spacer}>
    <div className="row" style={{margin:"10px"}}>
    <i className="" ><Avatar src={userImage} size="150px" round="50%" color="grey"/></i>
      <div className={classes.Info}>
        <h2 style={{color:"white"}}>{name}</h2>
        <p>
          {status} {company && <span> at {company}</span>}
        </p>
        <p className='my-1'>{location && <span>{location}</span>}</p><br></br>
        <Link to={`/profile/${_id}`} className='btn btn-light'>
          View Profile
        </Link>
      </div >
      <div className={classes.UList}>
      <ul className={classes.UList1}>
        {skills.slice(0, 4).map((skill, index) => (
          <li key={index} className='text-light'>
        <CheckIcon  /> {skill}
          </li>
        ))}
      </ul>
      </div>
      </div>
      </div>
  
  );
};




ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};


export default ProfileItem;
