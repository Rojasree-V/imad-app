var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


var names = [];
/*  app.get("/submit-name/:name", function(req, res) {  // here name is send in the URL itself
    var name = req.params.name;   */
app.get("/submit-name", function(req, res) {// URL has query string:  /submit-name?name=xxxx
   //Get the name from the request
   var name = req.query.name;
   
   names.push(name);
   // JSON: Javascript Object Notation 
   
   res.send(JSON.stringify(names)); //1000
});




app.get('/article-one', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});

app.get('/article-two', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});
app.get('/article-three', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/article-two', function (req, res) {
    res.send('Article two is requested and will be serverd here');
});

app.get('/article-three', function (req, res) {
    res.send('Article three is requested and will be serverd here');
});

var counter=0;
app.get('/counter', function(req,res) {
    counter = counter+1;
    res.send(counter.toString());
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
