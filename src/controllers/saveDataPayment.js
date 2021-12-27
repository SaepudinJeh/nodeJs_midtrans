const createError = require('http-errors');
const { Payment } = require('../models');

const saveDataPayment = async (req, res, next) => {
  try {

    const dataPayment = req.body;

    const checkOrderId = await Payment.findPaymentByOrderId(dataPayment.order_id);
    
    //  Save data payment if exist
    if (checkOrderId.length !== 0) {
      const payment = new Payment(dataPayment)
      
      if (dataPayment.transaction_status !== "capture" || "settlement") {
        return next(createError.BadGateway('Data cant modified!'))
      }

      const result = await payment.updatePayment()

      res.status(200).json({
        statusCode: 200,
        message: result
      })
    } 
    
    const payment = new Payment(dataPayment)
    await payment.createPayment().then((result) => {
      res.json({
        statusCode: 200,
        message: result
      })
    })

  } catch (error) {
    console.log(error);
    next(createError.BadGateway())
  }
}

module.exports = saveDataPayment