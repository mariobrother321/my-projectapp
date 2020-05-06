import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../../action/post';
import classes from './PostForm.module.css';


const PostForm = ({ addPost }) => {
  const [text, setText] = useState('');

  return (
    <div className={classes.PostForm}>
      <div>
        <h3 className="text-disabled">Say Something...</h3>
      </div>
      <form
        className={classes.Form}
        onSubmit={e => {
          e.preventDefault();
          addPost({ text });
          setText('');
        }}
      >
        <textarea 
        className={classes.Textarea}
          name='text'
          cols='15'
          rows='5'
          placeholder='Create a post'
          value={text}
          onChange={e => setText(e.target.value)}
          required
        />
        <input type='submit' className='btn btn-dark my-1' value='Submit' />
      </form>
    </div>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired
};

export default connect(
  null,
  { addPost }
)(PostForm);