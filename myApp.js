var express = require('express');
var app = express();

console.log("Hello World")

app.get('/now',function(req, res, next) {
    req.time = new Date().toString();
    next();
  }, function(req, res) {
    res.json({ time: req.time });
  });

app.get('/:word/echo', function(req, res) {
  res.json({ echo: req.params.word });
});

































 module.exports = app;
