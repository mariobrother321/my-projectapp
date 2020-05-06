import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../../Layout/Spinner/Spinner';
import PostItem from '../../Posts/PostItem/PostItem';
import CommentForm from '../CommentForm/CommentForm';
import CommentItem from '../CommentItem/CommentItem';
import { getPost } from '../../../action/post';
import classes from './Post.module.css';
import CompDiv from '../../CompSection/CompDiv/CompDiv';
import CompSection from '../../CompSection/CompSection';



const Post = ({ getPost, post: { post, loading }, match }) => {
  useEffect(() => {
    getPost(match.params.id);
  }, [getPost, match.params.id]);

  return loading || post === null ? (
    <Spinner />
  ) : (
    <CompSection>
    <CompDiv>
    <Fragment>
      <Link to="/posts" className="btn btn-dark">
        Back To Posts
      </Link>
      <PostItem post={post} showActions={false} />
     
      <CommentForm postId={post._id} />
      </Fragment>
      </CompDiv>

      <div className={classes.Spacer}></div>
      <CompDiv>
        <Fragment>
      <div className={classes.Comments}>
        {post.comments.map(comment => (
          <CommentItem key={comment._id} comment={comment} postId={post._id} />
         
        ))}
       
      </div>
    </Fragment>
    
    </CompDiv>

    </CompSection>
  );
};

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(mapStateToProps, { getPost })(Post);