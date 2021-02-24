var express = require('express');
var app = express();
let bodyParser = require('body-parser');

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


app.get('/name', (req, res) => {
  res.json({ name: req.query.first + " " + req.query.last });
})


app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());


app.post('/name', (req, res) => {
  res.json({ name: req.body.first + " " + req.body.last });
});

































 module.exports = app;
