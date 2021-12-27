const errorPayment = (req, res, next) => {
  const data = req.params

  console.log(data);

  res.json({
    message: "Payment Successfully"
  })
}

module.exports = errorPayment