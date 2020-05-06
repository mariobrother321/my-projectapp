import React, {Fragment, useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Spinner from '../Layout/Spinner/Spinner';
import {getProfiles} from '../../action/profile';
import PeopleAltTwoToneIcon from '@material-ui/icons/PeopleAltTwoTone';
import CompLocalSection from '../CompSection/CompLocalSection/CompLocalSection';
import CompDiv from '../CompSection/CompDiv/CompDiv';
import ProfileItem from '../Profiles/ProfileItem';

const Profiles = ({getProfiles, profile: {profiles, loading} }) => {
    
    useEffect(() => {
        getProfiles();
    }, [getProfiles]);
    
    return <Fragment>
        <CompLocalSection>
            <CompDiv>
        { loading ? <Spinner/> : <Fragment> 
            
            <h1 className="large" color="white"> Developers and Users</h1>
            <p className="lead">
                <PeopleAltTwoToneIcon style={{ fontSize:"60px"}}/><br/>Browse and connect with users
            </p>
            <div className="profiles-create">
                {profiles.length > 0 ? (
                    profiles.map(profile => (
                        <ProfileItem key={profile._id} profile={profile} />
                    )) 
                ) : <h4> No profiles found... </h4> } 
            </div>
            </Fragment>}
              </CompDiv>
            </CompLocalSection>
         </Fragment>;
    
};

Profiles.propTypes = {
    getProfiles: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    profile: state.profile
  });
  
  export default connect(
    mapStateToProps,
    { getProfiles }
  )(Profiles);
