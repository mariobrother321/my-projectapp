const mongoose = require('mongoose');



const ImageSchema = new mongoose.Schema({
 
user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
},
image:{
  data: Buffer,
  contentType: String
},

   
date:{
       type: Date,
       default: Date.now
   },
  
 

});


module.exports = Image = mongoose.model('image', ImageSchema);