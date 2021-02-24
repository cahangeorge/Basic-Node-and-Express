var express = require('express');
var app = express();

console.log("Hello World")

app.get('/now',function(req, res, next) {
    req.time = new Date().toString();
    next();
  }, function(req, res) {
    res.json({ time: req.time });
  });

app.get('/:word/echo', (req, res, next) => {
  req.params.word = {echo: word};
  next();
}, (req, res) => {
  res.json(req.params.word);
});

































 module.exports = app;
