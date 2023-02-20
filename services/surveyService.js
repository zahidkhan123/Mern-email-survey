const key = require('../config/keys');
const Survey = require('../models/Survey');
const createSurveyService = async (req) => {
  const { title, body, subject, recipients } = req.body;

  try {
    let surveyRes;
    // if (!stripeCharges) {
    //   return (charges = {
    //     success: false,
    //     message: 'Stripe Trasacton error',
    //     status: 422,
    //   });
    // }
    const survey = new Survey({
      title,
      body,
      subject,
      recipients: recipients.split(',').map((email) => ({ email })),
      _user: req.user.id,
      dateSent:Date.now()
    });

    if (!survey) {
      return (surveyRes = {
        success: false,
        message: 'Survey not created',
        status: 422,
      });
    }

    return (surveyRes = {
      success: true,
      message: null,
      data: data,
      status: 200,
    });
  } catch (error) {
    return (surveyRes = {
      success: false,
      message: 'something wend wrong',
      status: 404,
    });
  }
};

module.exports = {
  createSurveyService,
};
