const trackingdata = (req, res, next) => {
  const data = req.body
  console.log(data);

  res.json(data)
}

module.exports = trackingdata