var express = require('express');
var router = express.Router();
var db = require('./../models');

router.get('/posts', function (req, res, next) {
  db.Posts.find({}).then(function (posts) {
    res.render('blogs/index', {posts});
  });
})

router.get('/posts/:id', function (req, res, next) {
  db.Posts.findById(req.params.id).then(function (post) {
    res.render('blogs/show', {post});
  });
})

module.exports = router;
