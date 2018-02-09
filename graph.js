// var app     = require("./app.js"),
//     graph   = require('fbgraph');
    
// // this should really be in a config file!
// var conf = {
//     client_id:      '200133944056296'
//   , client_secret:  '1366d88c90d9e70c8f697207c728491b'
//   , scope:          'email, user_about_me, user_birthday, user_location, publish_actions'
//   // You have to set http://localhost:3000/ as your website
//   // using Settings -> Add platform -> Website
//   , redirect_uri:   'https://chatbot-site.herokuapp.com/blogs'
// };

// app.get('/auth', function(req, res) {

//   // we don't have a code yet
//   // so we'll redirect to the oauth dialog
//   if (!req.query.code) {
//     console.log("Performing oauth for some user right now.");
  
//     var authUrl = graph.getOauthUrl({
//         "client_id":     conf.client_id
//       , "redirect_uri":  conf.redirect_uri
//       , "scope":         conf.scope
//     });

//     if (!req.query.error) { //checks whether a user denied the app facebook login/permissions
//       res.redirect(authUrl);
//     } else {  //req.query.error == 'access_denied'
//       res.send('access denied');
//     }
//   }
//   // If this branch executes user is already being redirected back with 
//   // code (whatever that is)
//   else {
//     console.log("Oauth successful, the code (whatever it is) is: ", req.query.code);
//     // code is set
//     // we'll send that and get the access token
//     graph.authorize({
//         "client_id":      conf.client_id
//       , "redirect_uri":   conf.redirect_uri
//       , "client_secret":  conf.client_secret
//       , "code":           req.query.code
//     }, function (err, facebookRes) {
//       res.redirect('/UserHasLoggedIn');
//     });
//   }
// });
