const mongoose = require('mongoose');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  console.log("serialize user",user)
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  console.log(id);
  const user = await User.findById(id);
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/api/v1/auth/google/callback',
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ google_id: profile.id }).then((existingUser) => {
        if (existingUser) {
          done(null, existingUser);
        } else {
          new User({ google_id: profile.id })
            .save()
            .then((user) => done(null, user));
        }
      });
    }
  )
);

GoogleStrategy.error = function (err) {
  if (err.data && err.data.error) {
    // handle specific error here
    console.log('error');
    switch (err.data.error) {
      case 'invalid_client':
        // handle invalid client error
        console.log('invalid client error');
        break;
      case 'invalid_token':
        // handle invalid token error
        console.log('invalid token error');
        break;
      default:
        // handle other errors
        break;
    }
  } else {
    // handle generic error
    console.log('invalid break error');
  }
};
