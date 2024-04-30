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
router.get('/google/redirect', (req, res) => {
    res.send('You have reached callback URI');
})

module.exports = router;
