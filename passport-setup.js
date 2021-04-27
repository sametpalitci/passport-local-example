const LocalStrategy = require('passport-local').Strategy;
const passport = require('passport');
const User = require('./models/User');


passport.use(new LocalStrategy(
    function(username, password, done) {
        User.findOne({ username: username }, function(err, user) {
            if (err) { return done(err); }
            if (!user) { return done(null, false); }
            if (password !== user.password) { return done(null, false); }
            return done(null, user);
        });
    }
));