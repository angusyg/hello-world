const express = require('express')
const app = express()

app.get('/', function(req, res) {
  res.send('Hello World NEW! WW')
})

app.listen(process.env.PORT, function() {
  console.log('Example app listening on port', process.env.PORT)
})
