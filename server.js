var express = require('express');
var app = express();
var ua = require('universal-analytics');
var visitor = ua('UA-81977400-2')

app.get('/public/spanish.html', function(req, res) {
  res.render(__dirname + '/public/spanish.jade');
});

app.get('/public/english.html', function(req, res) {
  res.render(__dirname + '/public/english.jade');
});

app.get('/', function(req, res) {
  res.render(__dirname + '/index.jade');
});

app.use(express.static('./'));

app.set('view engine', 'jade');

visitor.pageview('/', function (err) {
  if (err) {
    console.log(err);
  } else 
   console.log('Google Analytics Ok');
})
var port = process.env.PORT || 3000;
app.listen(port);