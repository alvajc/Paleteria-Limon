var express = require('express');
var app = express();
var path = require('path');

app.get('/public/spanish.html', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/spanish.html'));
});

app.get('/public/english.html', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/english.html'));
});

app.get('../', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

var port = process.env.PORT || 3000;
app.listen(port);