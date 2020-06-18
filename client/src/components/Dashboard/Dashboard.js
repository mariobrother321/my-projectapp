import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import {Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getCurrentProfile, deleteAccount } from '../../action/profile';
import Spinner from '../Layout/Spinner/Spinner';
//import PersonIcon from '@material-ui/icons/Person';
import DashboardActions from './DashboardActions';
import Experience from './Experience/Experience';
import Education from './Education/Education';
import CompSection from '../CompSection/CompSection';
import CompDiv from '../CompSection/CompDiv/CompDiv';
import classes from './Dashboard.module.css';
//import PersonOutlineTwoToneIcon from '@material-ui/icons/PersonOutlineTwoTone';
import DeleteForeverTwoToneIcon from '@material-ui/icons/DeleteForeverTwoTone';
import Alert from '../Layout/Alert';
import Avatar from 'react-avatar';



const Dashboard = ({ 
  deleteAccount,
  getCurrentProfile, 
  auth:{user} , 
  profile: { profile,loading} }) => {
   

  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

    return loading && profile === null ? <Spinner/> : 
<Fragment> 
  <CompSection>
    <CompDiv>
    
    
      <h1 className={classes.LargePri}> Dashboard</h1>
          
             <i className="" ><Avatar src={user.userImage}
              size="150px" 
              round="50%" 
              
               alt=""/>Welcome {user.name}</i>
         
     {profile !== null ?<Fragment> 
     <section className="container">
       <div>
     
     <DashboardActions/> 
   
     <Experience experience = {profile.experience} />
     <Education education = {profile.education} />
     
     
     <div className={classes.My2}>
        <button className="btn btn-danger" onClick={ () => deleteAccount()}>
        <DeleteForeverTwoToneIcon/> Delete My Account
        </button>
     </div>
     </div>
     
     </section>
     </Fragment> 
    
   : <Fragment> 
     <p className="">You have not yet setup a profile, please add some info</p>
     <Link to='/create-profile' className="btn btn-primary">
       Create Profile
     </Link>
      </Fragment>}
      
    </CompDiv>
    <div className="btn btn-dark">
      <Link className="nav-link" 
      to="/posts" 
      style={{
      color: "white"
    }}>Posts</Link></div>{'  '}
    <div className="btn btn-dark">
      <Link className="nav-link" 
      to="/profiles"
      style={{
        color: "white"
      }}>Developers and Users</Link></div>
    <Alert/>
  </CompSection>
</Fragment> ;
    
};

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
    deleteAccount: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
   auth: state.auth,
   profile: state.profile,
   //user: state.user
});

export default  connect( mapStateToProps,{ getCurrentProfile, deleteAccount } )(Dashboard);
