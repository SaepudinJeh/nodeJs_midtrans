const router = require('express').Router();
const { 
  trackingdata,
  sendPayment,
  getPaymentByIdOrder,
  saveDataPayment,
  finishPayment, 
  errorPayment
} = require('../controllers')

const { checkSignature } = require('../middlewares')

router
  .get('/v1/payment', sendPayment)
  .get('/v1/payment/:orderId', getPaymentByIdOrder)
  .get('/error-payment', errorPayment)
  .get('/finish-payment', finishPayment)
  .post('/payment', checkSignature, saveDataPayment)
  .post('/notification', trackingdata)
  .post('/notif-recurring', trackingdata)
  .post('/pay-payment', trackingdata) 
  .post('/unfinish-payment',trackingdata)


module.exports = router