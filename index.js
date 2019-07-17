const express = require('express')
const app = express()

module.exports = (req, res) => {
  app.get('/', (req, res) => {
    res.redirect('https://thermal.codecarrot.net/')
  });

  app.post('/discord', (req, res) => {
    console.log('Posting message to Discord');
    console.log(res);
  })
} 