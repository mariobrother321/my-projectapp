import React from 'react'
import { Link } from 'react-router-dom';
//import PersonTwoToneIcon from '@material-ui/icons/PersonTwoTone';
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';
import AddCircleTwoToneIcon from '@material-ui/icons/AddCircleTwoTone';
import AddCircleOutlineTwoToneIcon from '@material-ui/icons/AddCircleOutlineTwoTone';
import classes from './DashBoardAction.module.css';
 

 const DashboardActions = () => {
    return (
        <div className="dash-buttons">
        <Link to="/edit-profile" className={classes.ButtonLight}>
        <EditTwoToneIcon/> Edit Profile </Link>
        
        <Link to="/add-experience" className={classes.ButtonLight}>
            <AddCircleTwoToneIcon/> Add Experience </Link>
        
        <Link to="/add-education" className={classes.ButtonLight}>
            <AddCircleOutlineTwoToneIcon/> Add Education</Link>
        
    
      </div>
    )
}

export default DashboardActions;
