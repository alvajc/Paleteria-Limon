var express = require('express');
var app = express();


app.get('/public/spanish.html', function(req, res) {
  res.render(__dirname + '/public/spanish.jade');
});

app.get('/public/english.html', function(req, res) {
  res.render(__dirname + '/public/english.jade');
});

app.get('/public/menuEnglish.html', function(req, res) {
  res.render(__dirname + '/public/menuEnglish.jade');
});

app.get('/public/location.html', function(req, res) {
  res.render(__dirname + '/public/location.jade');
});

app.get('/public/contact.html', function(req, res) {
  res.render(__dirname + '/public/contact.jade');
});

app.get('/public/followUs.html', function(req, res) {
  res.render(__dirname + '/public/followUs.jade');
});

app.get('/', function(req, res) {
  res.render(__dirname + '/index.jade');
});

app.use(express.static('./'));

app.set('view engine', 'jade');

var port = process.env.PORT || 3000;
app.listen(port);