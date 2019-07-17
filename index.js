const express = require('express')
const app = express()

module.exports = (req, res) => {
  app.post('/discord', function (req, res) {
    console.log('Posting message to Discord');
    console.log(res);
  })
} 