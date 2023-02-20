const express = require('express');
const route = express.Router();
const { createSurveysController } = require('../controllers/surveyController');
const { requireToken } = require('../middlewares/requireToken');
// const { checkCredits } = require('../middlewares/checkCreditMiddleware');
route.post('/create',requireToken, (req,res) => {

});

module.exports = route;

