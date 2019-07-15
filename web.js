var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('hello, WORLD');
});

app.listen(process.env.PORT || 3000);
