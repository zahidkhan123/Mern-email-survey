const express = require('express');
const route = express.Router()
const passport = require('passport');
const { userController } = require('../controllers/userController');
require('../config/keys');
route.get(
  '/google',
  passport.authenticate('google', {
    scope: [
      'profile',
      'email',
    ],
  })
);

route.get('/google/callback', passport.authenticate('google'));
route.get('/currentUser', userController)
module.exports = route;
