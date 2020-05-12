var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mare Cheia' });
});

router.get("/forum", function(req,res,next) {
  res.render("forum", { title: 'Forum' });
})

module.exports = router;
