const express = require('express');
const route = express.Router();
const passport = require('passport');
const { stripeBillingController } = require('../controllers/billingController');
require('../config/keys');

route.post('/stripe',stripeBillingController)

module.exports = route;
