var express = require('express')

var app = express()

app.get('/', function (req, res) {
  res.send('Hello Awesome Universe !!!')
})

app.listen(80, function () {
  console.log('app listening on port 80!')
})
