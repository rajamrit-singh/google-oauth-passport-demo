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
    scope: ['profile', 'email'], //what we want to retrieve from user's profile
    session: false  //resolve error of need to use express-session
}));

//callback route for google to redirect to
router.get('/google/redirect', passport.authenticate('google', {session: false}), (req, res) => {
    //passport can see we have code in url so it would know it is authenticated
    // It will use that code to get profile information
    // callback inside passport-setup.js will be called
    res.send(req.user);
})

module.exports = router;
