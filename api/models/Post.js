const mongoose = require('mongoose')
const { Schema } = mongoose

const postSchema = new Schema({
  postedBy:String,
  text:String,
  like: [{
    type: String
  }]

});

module.exports = mongoose.model('Post', postSchema)