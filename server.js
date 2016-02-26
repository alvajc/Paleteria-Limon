var express = require('express');
var app = express();

app.get('/public/spanish.html', function(req, res) {
  res.sendFile(__dirname + '/public/spanish.html');
});

app.get('/public/english.html', function(req, res) {
  res.sendFile(__dirname + '/public/english.html');
});

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.use(express.static('./'));

var port = process.env.PORT || 3000;
app.listen(port);