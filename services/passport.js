const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

passport.use(new GoogleStrategy({
    clientID: keys.googleClientId,
    clientSecret: keys.googleSecretKey,
    callbackURL: '/auth/google/callback'
  }, (accessToken) => {
    console.log(accessToken);
  }))
  