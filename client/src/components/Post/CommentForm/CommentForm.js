import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addComment } from '../../../action/post';
import classes from './CommentForm.module.css';
//import CompDiv from '../../CompSection/CompDiv/CompDiv';


const CommentForm = ({ postId, addComment }) => {
  const [text, setText] = useState('');

  return (
   
    <div className={classes.PostForm}>
      <div >
        <h3>Leave a Comment</h3>
      </div>
      <form
        className='form my-1'
        onSubmit={e => {
          e.preventDefault();
          addComment(postId, { text });
          setText('');
        }}
      >
        <textarea className={classes.Textarea}
          name='text'
          cols='30'
          rows='5'
          placeholder='Comment the post'
          value={text}
          onChange={e => setText(e.target.value)}
          required
        />
        <input type='submit' className='btn btn-dark my-1' value='Submit' />
      </form>
    </div>
    
  );
};

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired
};

export default connect(
  null,
  { addComment }
)(CommentForm);