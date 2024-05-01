const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');


passport.serializeUser((user, done) => {    // called when done is called from callback in passport.use
    console.log(user.id);
    done(null, user.id)
})

passport.deserializeUser((id, done) => {    // called when done is called from callback in passport.use
    // find user by id
    console.log(id)
    // call done when done
})

passport.use(
    new GoogleStrategy({
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret,
        callbackURL: '/auth/google/redirect'
    }, (accessToken, refreshToken, profile, done) => {
        // console.log(p1)
        // // passport callback function
        console.log(accessToken);
        console.log(refreshToken);
        console.log(profile);
        done(null, profile.id);

        // if user doesn't exist save his profile, else get his data
    })
)
