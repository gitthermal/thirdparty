const express = require('express')
const app = express()

console.log('Hello world!!!');
app.get('/', function (req, res) {
  res.send('Hello World')
})