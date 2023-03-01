
const { createSurveyService } = require('../services/surveyService');
const {
  useErrorResponse,
  useSuccessResponse,
} = require('../utils/apiResponse');

const createSurveysController = async (req, res) => {
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
