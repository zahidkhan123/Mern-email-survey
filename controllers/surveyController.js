
const { createSurveyService } = require('../services/surveyService');
const {
  useErrorResponse,
  useSuccessResponse,
} = require('../utils/apiResponse');

const createSurveysController = async (req, res) => {
  //   res.setHeader('Access-Control-Allow-Origin', '*');
  //   res.setHeader('Access-Control-Allow-Credentials', 'true');
  //   res.setHeader('Access-Control-Max-Age', '1800');
  //   res.setHeader('Access-Control-Allow-Headers', 'content-type');
  //   res.setHeader(
  //     'Access-Control-Allow-Methods',
  //     'PUT, POST, GET, DELETE, PATCH, OPTIONS'
  //   );
  const createSurveys = await createSurveyService(req);

  if (!createSurveys.success) {
    return useErrorResponse(res, createSurveys.message, createSurveys.status);
  }

  return useSuccessResponse(
    res,
    createSurveys.message,
    createSurveys.data,
    createSurveys.status
  );
};

module.exports = {
  createSurveysController,
};
