const express = require('express');
const morgan = require('morgan')

const checkSignature = require('./checkSignature')

module.exports = {
  middlewares: (app) => {
    app.use(morgan('dev'))
    app.use(express.urlencoded({ extended: false }))
    app.use(express.json())
  },
  checkSignature
}