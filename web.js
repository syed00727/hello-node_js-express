var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('HELLO, WORLD');
});

app.listen(process.env.PORT || 3000);
