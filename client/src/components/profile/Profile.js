import React, {Fragment, useEffect} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import Spinner from '../Layout/Spinner/Spinner';
import ProfileTop from './ProfileTop/ProfileTop';
import ProfileAbout from './ProfileAbout/ProfileAbout';
import ProfileExperience from './ProfileExperience/ProfileExperience';
import ProfileEducation from './ProfileEducation/ProfileEducation';
import ProfileGithub from './ProfileGithub/ProfileGithub';
import {getProfileById} from '../../action/profile';
import CompLocalSection from '../CompSection/CompLocalSection/CompLocalSection';
import CompDiv from '../CompSection/CompDiv/CompDiv';
import classes from './Profile.module.css';
import Aux from '../../hoc/Auxiliary/Auxiliary';

const Profile = ({ 
    getProfileById, 
    profile:{profile, loading},
    auth,
    match
}) => {

    useEffect(() => {
        getProfileById(match.params.id);
    }, [getProfileById, match.params.id]);

    return (
        <Fragment>
             {profile === null || loading ? <Spinner/> : 
             <Fragment> 
                <CompLocalSection>
                    <CompDiv>
               <Link  to="/profiles" className="btn btn-dark"> 
                Back To Profiles
               </Link>{' '}
               {auth.isAuthenticated && auth.loading === false && auth.user._id === 
                profile.user._id && (
                <Link to='/edit-profile' 
                className="btn btn-dark"> 
                Edit Profile
                </Link>)}
                <div className={classes.ProfileGrid}>
                    <ProfileTop  profile={profile}/>
                    <ProfileAbout profile={profile} />
                </div>
               
                    </CompDiv> 
                  
                    <div className={classes.ExpEdu}>
                  
                      <div className={classes.ProfileExperience}>
                      
                       <h2 style={{color:"white"}}>Experience</h2>
                    
                         {profile.experience.length > 0 ? (<Fragment>
                             {profile.experience.map(experience => (
                                 <Aux key={experience._id}>
                                 <div className={classes.Line}></div>
                                 <ProfileExperience 
                                 key={experience._id} 
                                 experience={experience}/>
                                 </Aux>
                             ))}
                             
                         </Fragment>) : (<h4>No experience credentials!</h4>)}
                         
                         <div className={classes.Line}></div>
                         
                       <div className={classes.ProfileEducation}>
                         <h2 style={{color:"white"}}>Education</h2>
                          {profile.education.length > 0 ? (<Fragment>
                             {profile.education.map(education => (
                                 <Aux  key={education._id}>
                                 <div className={classes.Line}></div>
                                 <ProfileEducation 
                                 key={education._id} 
                                 education={education}/>
                                 </Aux>
                             ))}
                             
                         </Fragment>) : (<h4>No education credentials!</h4>)}

                        </div>
                      </div>
                  </div>

                   {profile.githubusername && (
                       <ProfileGithub  username={profile.githubusername}/>
                   )}
                   

               </CompLocalSection>
            </Fragment> }
        </Fragment>
    )
}

Profile.propTypes = {
   getProfileById: PropTypes.func.isRequired,
   profile: PropTypes.object.isRequired,
   auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
   profile: state.profile,
   auth: state.auth
});

export default connect(mapStateToProps, {getProfileById})(Profile);
