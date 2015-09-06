var express = require('express');
var router = express.Router();
var db = require('./../models');
//index
router.get('/posts', function (req, res, next) {
  db.Posts.find({}).then(function (posts) {
    res.render('posts/index', {posts});
  });
})
//new
router.get('/posts/new', function (req, res, next) {
  res.render('posts/new');
})
//show
router.get('/posts/:id', function (req, res, next) {
  db.Posts.findById(req.params.id).then(function (post) {
    res.render('posts/show', {post});
  });
})
//create
router.post('/posts', function (req, res, next) {
  db.Posts.create({
    title: req.body.title,
    body: req.body.title,
    date: req.body.date
  }).then(function (post) {
    res.redirect('/posts/' + post._id);
  })
})
//edit
router.get('/posts/:id/edit', function (req, res, next) {
  db.Posts.findById(req.params.id).then(function (post) {
    res.render('posts/edit', {post});
  });
})
//update
router.post('/posts/:id', function (req, res, next) {
  db.Posts.findByIdAndUpdate(req.params.id, {
    title: req.body.title,
    body: req.body.title,
    date: req.body.date
  }).then(function (post) {
    res.redirect('/posts/' + post._id);
  })
})
//delete
router.post('/posts/:id/delete', function (req, res, next) {
  db.Posts.findByIdAndRemove(req.params.id);
  res.redirect('/posts');
})

router.get('/posts/:id/edit')

module.exports = router;
