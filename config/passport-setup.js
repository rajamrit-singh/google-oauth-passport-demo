const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth');
const keys = require('./keys');

passport.use(
    new GoogleStrategy({
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret
    }, () => {
        // passport callback function  
    })
)
