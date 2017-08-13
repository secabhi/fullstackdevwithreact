const express = require('express');
const passport = require('passport');
const googleAuth = require('passport-google-oauth20').Strategy;
const app = express();
const keys = require('./config/keys');

passport.use(new googleAuth({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callback: '/auth/google/callback'
}, (accessToken) => {
  console.log(accessToken);
}))

// Routes

app.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email']
})
)

// Client id -- 819880548666-neul5ufjf1b394l7acoq11jlrldcf75k.apps.googleusercontent.com
// Client secret -- rsmth5HazwWftGO54Sv-iPKV

const PORT = process.env.PORT || 5000

app.listen(PORT);