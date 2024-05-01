const router = require('express').Router()
const passport = require('passport')

// auth login
router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/logout', (req, res) => {
    res.send('logging out');
});

router.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email', 'https://www.googleapis.com/auth/youtube'] //what we want to retrieve from user's profile
}));

//callback route for google to redirect to
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    //passport can see we have code in url so it would know it is authenticated
    // It will use that code to get profile information
    // callback inside passport-setup.js will be called
    res.send('You have reached callback URI');
})

module.exports = router;
