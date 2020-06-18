import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../Layout/Spinner/Spinner';
import PostItem from './PostItem/PostItem';
import PostForm from './PostForm/PostForm';
import { getPosts } from '../../action/post';
import CompSection from '../CompSection/CompSection';
import CompDiv from '../CompSection/CompDiv/CompDiv';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import classes from './Posts.module.css';
import Alert from '../Layout/Alert';



const Posts = ({ getPosts, post: { posts, loading } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return loading ? (
    <Spinner />
  ) : (
    <CompSection>
      <CompDiv>
         <Fragment>
             <h1 className='large text-disabled'>Posts</h1>
             <p className='lead'>
               <AccountCircleIcon/> Welcome to the community
             </p>
             <PostForm />
             </Fragment>
             </CompDiv>
             <div className={classes.Spacer}></div>
             <CompDiv>
             <Fragment>
             <div className={classes.Posts}>
               {posts.map(post => (
                 <PostItem key={post._id} post={post} showAvatar={true}/>
                 
               )
               )}
               
               
             </div>
            
             </Fragment>
             <Alert/>
             </CompDiv>
             <Alert/>
      
    </CompSection>
   
  );
};

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(
  mapStateToProps,
  { getPosts }
)(Posts);