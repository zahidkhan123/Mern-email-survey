const key = require('../config/keys');
const Survey = require('../models/Survey');
const Mailer = require('../helpers/Mailer');
const surveyTemplate = require('../helpers/emailTemplates/surveyTemlate');
const createSurveyService = async (req) => {
  // console.log("Request Body",req.body)
  const { title, body, subject, recipients } = req.body;

  try {
    let surveyRes;

    const survey = new Survey({
      title,
      body,
      subject,
      recipients: recipients.split(',').map((email) => ({ email })),
      _user: req.user.id,
      dateSent: Date.now(),
    });
    console.log("Survey",survey)
    const mailer = new Mailer(survey, surveyTemplate(survey));
    await mailer.send();
    await survey.save();
    req.user.credits -= 1;
    const user = await req.user.save();
    if (!user) {
      return (surveyRes = {
        success: false,
        message: 'Survey not created',
        status: 422,
      });
    }

    return (surveyRes = {
      success: true,
      message: null,
      data: user,
      status: 200,
    });
  } catch (error) {
    return (surveyRes = {
      success: false,
      message: 'something went wrong',
      status: 404,
    });
  }
};

module.exports = {
  createSurveyService,
};
