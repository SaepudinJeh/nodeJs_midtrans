const crypto = require('crypto')
const createError = require('http-errors')

const checkSignature =  (req, res, next) => {
  const { signature_key, order_id, status_code, gross_amount } = req.body;
  const ServerKey= process.env.SERVER_KEY

  const hashSignature = crypto.createHash('sha512').update(`${order_id}${status_code}${gross_amount}${ServerKey}`, 'utf8').digest('hex')
  
  if (signature_key !== hashSignature) {
    next(createError.BadGateway('Invalid signature key!'))
  }

  next()
}

module.exports =  checkSignature