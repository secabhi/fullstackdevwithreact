const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const app = express();
const keys = require('./config/keys');

passport.use(new GoogleStrategy({
  clientID: keys.googleClientId,
  clientSecret: keys.googleSecretKey,
  callback: '/auth/google/callback'
}, (accessToken) => {
  console.log(accessToken);
}))

// Routes

app.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email']
})
);

const PORT = process.env.PORT || 5000

app.listen(PORT);