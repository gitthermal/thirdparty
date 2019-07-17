const express = require('express')
const app = express()

module.exports = () => {
  console.log('Hello world!!!');
  app.get('/', function (req, res) {
    res.send('Hello World')
  })
}