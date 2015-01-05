
var express = require('express')
  , http = require('http')
  , serveStatic = require('serve-static')
  , bodyParser = require('body-parser');

var app = express(); 
var server = http.createServer(app);

app.use(serveStatic(__dirname));

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.post('/translate/', function(req, res){
    log("post, body = ", req.body );
    var out = {
    	status: "OK",
    	out_text: trans(req.body.query, req.body.from, req.body.to)    	
    }
    res.send(out);
});

function log() {
	console.log.apply(console, arguments);
}

function trans(text, from, to) {
	return "Translated text " + text;
}

// after all initialization let's start server
server.listen(3000);
log("Server is listening on port 3000 ...");