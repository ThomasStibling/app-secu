const mongoose = require('mongoose')
const { Schema } = mongoose

const postSchema = new Schema({
  postedBy:String,
  text:String,
  like:[String]
});

module.exports = mongoose.model('User', userSchema)