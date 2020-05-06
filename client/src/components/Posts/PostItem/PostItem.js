import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { addLike, removeLike, deletePost } from '../../../action/post';
import CompDiv from '../../CompSection/CompDiv/CompDiv';
import classes from './PostItem.module.css';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Avatar from 'react-avatar';



const PostItem = ({
  addLike,
  removeLike,
  deletePost,
  auth,
  post: { _id, text, name, avatar, user, likes, comments, date },
  showActions,
  profile
}) => (
  
  <div className={classes.Post}>
    <div>

    <Avatar name={name} size="150px" round="50%" color="grey" />
      <Link to={`/profile/${user}`}>
   
        <h4 className={classes.Text}>{name}</h4>
      </Link>
    </div>
    <div>
      <p className={classes.My1}>{text}</p>
      <p className={classes.PostDate}>
        Posted on <Moment format='YYYY/MM/DD'>{date}</Moment>
      </p>

      {showActions && (
      <CompDiv>
        <Fragment>
          <button
            onClick={() => addLike(_id)}
            type='button'
            className='btn btn-light'
          >
            <ThumbUpIcon  />
            <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
          </button>{' '}
          <button
            onClick={() => removeLike(_id)}
            type='button'
            className='btn btn-light'
          >
            <ThumbDownIcon />
          </button>{' '}
          <Link to={`/posts/${_id}`} className='btn btn-dark'>
            Discussion{' '}
            {comments.length > 0 && (
              <span className='comment-count'>{comments.length}</span>
            )}
          </Link>{' '}
          {!auth.loading && user === auth.user._id && (
            <button
              onClick={() => deletePost(_id)}
              type='button'
              className='btn btn-danger'
            >
              <HighlightOffIcon/>
            </button>
          )}
        </Fragment>
        </CompDiv>
        
      )}
    </div>
  </div>
 
);

PostItem.defaultProps = {
  showActions: true
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  showActions: PropTypes.bool
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { addLike, removeLike, deletePost }
)(PostItem);