var router = require('express').Router();
var mongoose = require('mongoose');
var Article = require('../../models/Article');

// return a list of tags
router.get('/', function(req, res, next) {
  Article.find().distinct('tagList').then(function(tags){
    return res.json({tags: tags});
  }).catch(next);
});

module.exports = router;
