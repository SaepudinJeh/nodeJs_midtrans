const payment = require('./payment')

module.exports = (app) => {
  app.use(payment)
}