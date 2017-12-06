var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET colors listing. */
router.get('/', function(req, res, next) {

  axios.get('http://www.colourlovers.com/api/palettes/top?format=json')
    .then(function (response) {
      res.json(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });

});

module.exports = router;
