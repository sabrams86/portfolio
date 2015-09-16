var express = require('express');
var router = express.Router();
var db = require('./../models');
var bcrypt = require('bcryptjs');

//login
router.get('/admin/login', function (req, res, next) {
  res.render('users/login');
})

//signin
router.post('/admin/login', function (req, res, next) {
  db.Users.findOne({username: req.body.username}).then(function (user) {
    if (bcrypt.compareSync(req.body.password, user.password)){
      req.session.adminId = user._id;
      res.redirect('/posts/new');
    } else {
      res.redirect('/');
    }
  })
})

// //new
// router.get('/new', function (req, res, next) {
//   res.render('users/new');
// })

// //create
// router.post('/', function (req, res, next) {
//   var hash = bcrypt.hashSync(req.body.password, 8);
//   db.Users.create({
//     username: req.body.username,
//     password: hash
//   }).then(function (user) {
//     req.session.adminId = user._id;
//     res.redirect('posts/new');
//   });
// })

module.exports = router;
