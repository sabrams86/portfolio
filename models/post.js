var mongoose = require('mongoose');

var postSchema = new mongoose.Schema({
  title: String,
  body: String,
  date: String
})

var Post = mongoose.model('Post', postSchema);

module.exports = Post;
