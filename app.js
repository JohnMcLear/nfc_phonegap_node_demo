// you will have seen this a million times before.
var express = require('express'),
ejs = require('ejs');

var app = express();

app.set('views', __dirname + '/');
app.engine('html', require('ejs').renderFile);

app.get('/', function(req, res) { // use ejs to render
  console.log("yo");
  res.render("www/index.html");
});


app.get('/access', function(req, res){
  console.log("NFC ndef trying to get down into funky town", req.query.payload);
  // just to show for now..
  if(req.query.payload == "http://twitter.com/johnmclear"){
    console.log("mheh");
    res.send("Hey"); // obviously you would NEVER do this..
  }
});

app.listen(3000);

