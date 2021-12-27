const express = require('express');
const createError = require('http-errors');

const { middlewares } = require('../src/middlewares')

require('dotenv').config();

const router = require('./routes')

const app = express()

// Middlewares
middlewares(app)

router(app)

app.use((req, res, next) => {
  next(createError.NotFound());
});

app.use((error, req, res, next) => {
  error.statusCode = error.statusCode || 500;
  error.status = error.status || 'error';
  

  res.status(error.statusCode).json({
    statusCode: error.status,
    message: error.message,
  });
});


app.listen(process.env.PORT, () => {
  console.log('Server running 3000');
})