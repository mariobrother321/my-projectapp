import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { deleteComment } from '../../../action/post';
import CompDiv from '../../CompSection/CompDiv/CompDiv';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import classes from './CommentItem.module.css';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Avatar from 'react-avatar';


const CommentItem = ({
  postId,
  comment: { _id, text, name, avatar, user, date },
  auth,
  deleteComment
}) => (

  <Aux>
      <div className={classes.Spacer}></div>
  <CompDiv>
     
  <div className={classes.Post}>
    <div>
      <Link to={`/profile/${user}`}>
      <Avatar name={name} size="150px" round="50%" color="grey" />
        <h4 className={classes.Text}>{name}</h4>
      </Link>
    </div>
    <div className={classes.Comments}>
      <p className='my-1'>{text}</p>
      <p className='post-date'>
        Posted on <Moment format='YYYY/MM/DD'>{date}</Moment>
      </p>
      {!auth.loading && user === auth.user._id && (
        <button
          onClick={() => deleteComment(postId, _id)}
          type='button'
          className='btn btn-danger'
        >
          <HighlightOffIcon/>
        </button>
      )}
    </div>

  </div>


  </CompDiv>
  </Aux>
  
);

CommentItem.propTypes = {
  postId: PropTypes.string.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { deleteComment }
)(CommentItem);