const sendPayment = require('./sendPayment')
const trackingdata = require('./trackingData')
const getPaymentByIdOrder = require('./getPaymentByOrderId')
const saveDataPayment = require('./saveDataPayment')
const finishPayment = require('./finishPayment')
const errorPayment = require('./errorPayment')

module.exports = {
  sendPayment,
  trackingdata,
  getPaymentByIdOrder,
  saveDataPayment,
  finishPayment,
  errorPayment
}