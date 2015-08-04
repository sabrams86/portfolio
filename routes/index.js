var express = require('express');
var router = express.Router();
var sendgrid = require('sendgrid')(process.env.SENDGRID_API);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { info: req.flash('info') });
});

router.post('/send', function (req, res, next) {
  var payload   = {
    to      : process.env.EMAIL,
    from    : req.body.email,
    subject : req.body.subject,
    text    : req.body.body
  }
  sendgrid.send(payload, function(err, json) {
    if (err) { console.error(err); }
    console.log(json);
  });
  // req.flash('info', 'Thank you, your message has been sent')
  res.redirect('/');
})

module.exports = router;
