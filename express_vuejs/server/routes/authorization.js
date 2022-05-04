var express = require('express');
var router = express.Router();
const request = require('request');

// your application requests authorization
var authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: {
      'Authorization': 'Basic ' + (new Buffer.from(process.env.SPOTIFY_CLIENT_ID + ':' + process.env.SPOTIFY_CLIENT_SECRET).toString('base64'))
  },
  form: {
    grant_type: 'client_credentials'
  },
  json: true
};
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// authorization code
/***
 * we call spotify api to get the access token
 * and then we send the access token to the client
 * 
 */
router.post('/', function(req, res, next) {
  request.post(authOptions, function(error, response, body) {
          res.status(200).json({body: body});
     
  }
);
});
  

module.exports = router;
