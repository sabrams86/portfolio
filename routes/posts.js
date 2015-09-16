var express = require('express');
var router = express.Router();
var db = require('./../models');
var bcrypt = require('bcryptjs');
var db = require('./../models');

router.get('/blog', function (req, res, next) {
  res.render('posts/blog');
})
//index
router.get('/posts', function (req, res, next) {
  console.log('------------------------------------------------');
  db.Posts.find({}).then(function (posts) {
    res.json(posts);
  });
})
//new
router.get('/posts/new', function (req, res, next) {
  if (req.session.adminId){
    db.Users.findById(req.session.adminId).then(function (user) {
      res.render('posts/new');
    })
  } else {
    res.redirect('/');
  }
})
// //show
// router.get('/posts/:id', function (req, res, next) {
//   db.Posts.findById(req.params.id).then(function (post) {
//     res.render('posts/show', {post});
//   });
// })
// //create
router.post('/posts', function (req, res, next) {
  db.Posts.create({
    title: req.body.title,
    body: req.body.body,
    date: req.body.date
  }).then(function (post) {
    res.redirect('/posts');
  })
})
// //edit
// router.get('/posts/:id/edit', function (req, res, next) {
//   db.Posts.findById(req.params.id).then(function (post) {
//     res.render('posts/edit', {post});
//   });
// })
// //update
// router.post('/posts/:id', function (req, res, next) {
//   db.Posts.findByIdAndUpdate(req.params.id, {
//     title: req.body.title,
//     body: req.body.title,
//     date: req.body.date
//   }).then(function (post) {
//     res.redirect('/posts/' + post._id);
//   })
// })
// //delete
// router.post('/posts/:id/delete', function (req, res, next) {
//   db.Posts.findByIdAndRemove(req.params.id);
//   res.redirect('/posts');
// })

router.get('/posts/:id/edit')

module.exports = router;
