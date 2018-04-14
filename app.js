const express = require('express')
const app = express()

app.get('/', function(req, res) {
  res.send('Hello World NEW! WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW')
})

app.listen(process.env.PORT, function() {
  console.log('Example app listening on port', process.env.PORT)
})
