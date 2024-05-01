const express = require('express');
const authRoutes = require('./routes/auth-routes');
const cookieSession = require('cookie-session');
const keys = require('./config/keys')
const app = express();
const passportSetup = require('./config/passport-setup');
const passport = require('passport');

// set view engine
app.set('view engine', 'ejs');
app.use('/auth', authRoutes);

app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey]  // use this to encrypt cookies
}))

// initialize passport
app.use(passport.initialize());
app.use(passport.session());

// create home route
app.get('/', (req, res) => {
    res.render('home');
});

app.get('/auth/login')

app.listen(3000, () => {
    console.log('app now listening for requests on port 3000');
});