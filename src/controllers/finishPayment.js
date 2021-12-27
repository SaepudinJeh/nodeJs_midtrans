const queryString = require('querystring');
const url = require('url');


const finishPayment = (req, res, next) => {
  const parseQueryString = queryString.parse(url)
  console.log(parseQueryString);

  res.json({
    message: "Payment Successfully"
  })
}

module.exports = finishPayment