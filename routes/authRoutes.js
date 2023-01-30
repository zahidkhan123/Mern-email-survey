const express = require('express');
const route = express.Router()
const passport = require('passport');
require('../config/keys');
route.get(
  '/',
 
  passport.authenticate('google', {
    scope: [
      'profile',
      'email',
    ],
  })
);

route.get('/callback', passport.authenticate('google'));

module.exports = route;
