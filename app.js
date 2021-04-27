const express = require('express');
const app = express();
const passport = require('passport');
const mongoose = require('mongoose');
require('./passport-setup');
const User = require('./models/User');

app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());

app.post('/login',
    passport.authenticate('local', {
        failureRedirect: '/login',
        session: false
    }),
    function(req, res) {
        res.redirect('/');
    });

app.post('/register', (req, res) => {
    const potantialUser = {
        username: "hyorax",
        password: "123"
    };
    User.create(potantialUser);
})

mongoose.connect('mongodb://localhost:27017/passportjsnode', { useUnifiedTopology: true, useNewUrlParser: true }).then(() => {
    app.listen(3000, () => {
        console.log("App is listening 3000 Port");
    })
})