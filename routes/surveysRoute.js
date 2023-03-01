const express = require('express');
const _ = require('lodash');
const route = express.Router();
const url = require('url');
const { createSurveysController } = require('../controllers/surveyController');
const { requireToken } = require('../middlewares/requireToken');
const { checkCredits } = require('../middlewares/checkCreditMiddleware');

route.post('/create', requireToken, checkCredits, createSurveysController);
route.post('/webhooks', (req, res) => {
  const events = _.map(req.body, ({ email, url }) => {
    const parsedUrl = url.parse(url);
    const path = parsedUrl.pathname;
    const surveyIdRegex = /\/surveys\/(\w+)\/(\w+)/;
    const match = path.match(surveyIdRegex);
    const surveyId = match[1]; // "34535cdsfdfsfl434"
    const choice = match[2]; // "yes"

    const compactEvents = _.compact(events);
    const uniqueEvents = _.uniqBy(compactEvents,'email',"surveyId")
  });
});
module.exports = route;
