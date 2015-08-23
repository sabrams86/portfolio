var mongoose = require('mongoose');
mongoose.connect('mongodb://' + process.env.MONGOLAB_URI);

module.exports.Posts = require('./post');
