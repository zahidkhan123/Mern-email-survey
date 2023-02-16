const { stipeBillingService } = require('../services/billingService');
const {
  useErrorResponse,
  useSuccessResponse,
} = require('../utils/apiResponse');

const stripeBillingController = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Max-Age', '1800');
  res.setHeader('Access-Control-Allow-Headers', 'content-type');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'PUT, POST, GET, DELETE, PATCH, OPTIONS'
  );
  const getBilling = await stipeBillingService(req);

  if (!getBilling.success) {
    return useErrorResponse(res, getBilling.message, getBilling.status);
  }

  return useSuccessResponse(
    res,
    getBilling.message,
    getBilling.data,
    getBilling.status
  );
};

module.exports = {
  stripeBillingController,
};
