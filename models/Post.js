const mongoose = require('mongoose');
const User = require('../models/User');


const Schema = mongoose.Schema;

const PostSchema = new Schema({
  
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users',
    autopopulate: false
  },
  text: {
    type: String,
    required: true
  },
  name: {
    type: String
  },
  avatar: {
    type: String
  },
  userImage:{
    type: String
  },

  likes: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users'

      }
    }
  ],
  comments: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        autopopulate: false
      },
      userImage:{
        type: String
      },
      text: {
        type: String,
        required: true
      },
      name: {
        type: String
      },
      avatar: {
        type: String
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});
PostSchema.plugin(require('mongoose-autopopulate'));
//const PostSchema = mongoose.Schema({ nested: nestedSchema });


module.exports = Post = mongoose.model('post', PostSchema);