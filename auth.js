//documentation from http://webapplog.com/node-js-oauth1-0-and-oauth2-0-twitter-api-v1-1-examples/comment-page-1/#comment-552
//https://github.com/nellem23/node-twitter/blob/master/examples/example-search.js
//https://github.com/ciaranj/node-oauth.git
//https://github.com/nellem23/node-twitter.git
//OAuth authorization for me

var OAuth = require('OAuth');
var oauth = new OAuth.OAuth(
      'https://api.twitter.com/oauth/request_token',
      'https://api.twitter.com/oauth/access_token',
      'axbqVGaMYg2rM2qdSkdEjTmNe',
      'VICnK31t9yIRg5q98evBbY0k8vtMhaq9bXQ6JIcYZ4bjiVDMbb',
      '1.0A',
      null,
      'HMAC-SHA1'
    );
    oauth.get(
      'https://api.twitter.com/1.1/trends/place.json?id=23424977',
      '332459563-ptzsmUitlpwsU5SFwpMwv7H2hJTlMxq87iJvMPhw', 
      //you can get it at dev.twitter.com for your own apps
      'CaETKBmvcdb0qzCy8WpJXp1VqRTautFY8pjvak8jCimLA', 
      //you can get it at dev.twitter.com for your own apps
      function (e, data, res){
        if (e) console.error(e);        
        console.log(require('util').inspect(data));
        done();      
      });    
});

console.log('done with oAuth');

