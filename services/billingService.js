const key = require('../config/keys');
const stripe = require('stripe')(key.stripeSecretKey);
const User = require('../models/User');
const stipeBillingService = async (req) => {
  try {
    const stripeCharges = await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      description: '$5 for 5 credits',
      source: req.body.id,
    });

    let charges;
    if (!stripeCharges) {
      return (charges = {
        success: false,
        message: 'Stripe Trasacton error',
        status: 422,
      });
    }

    
    req.user.credits += 5
    const data = await req.user.save();
    console.log(data);
    if (!data) {
      return (charges = {
        success: false,
        message: 'no stripe billing found',
        status: 422,
      });
    }

    return (charges = {
      success: true,
      message: null,
      data: data,
      status: 200,
    });
  } catch (error) {
    return (charges = {
      success: false,
      message: 'something wend wrong',
      status: 404,
    });
  }
};

module.exports = {
  stipeBillingService,
};
