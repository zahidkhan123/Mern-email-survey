const express = require('express');
const route = express.Router();
const passport = require('passport');
const {
  getUserTokenController,
  userLogoutController,
} = require('../controllers/userController');
require('../config/keys');
route.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
);

route.get(
  '/facebook',
  passport.authenticate('facebook', {
    scope: ['profile'],
  })
);

route.get('/failed/login', (req,res,next) => {
  console.log("here")
  res.send("login faild")
})

route.get(
  '/facebook/callback',
  passport.authenticate('facebook',
  {failureRedirect:'/failed/login'}
  )
);
route.get('/google/callback', passport.authenticate('google'));
route.get('/logout', userLogoutController);
route.get('/currentUser', getUserTokenController);

module.exports = route;
