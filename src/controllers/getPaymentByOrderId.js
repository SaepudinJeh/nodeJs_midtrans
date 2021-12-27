const createError = require('http-errors');
const { Payment } = require('../models');

const getPaymentByIdOrder = async (req, res, next) => {
  try {
    const { orderId } = req.params;
    const dataPayment = await Payment.findPaymentByOrderId(orderId);

    if (dataPayment.length === 0) {
      return next(createError.NotFound('Data not Found!'))
    }

    res.json(dataPayment)
  } catch (error) {
    console.log(error);
    next(error);
  }
}

module.exports = getPaymentByIdOrder