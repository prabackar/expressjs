var express = require('express');
var app = express();

app.get('/', function(request, response) {
	//response.send('Hellow World\n');
	response.write('Hello World\n');
	response.end();
});

//JSON - content-type set to application/json
app.get('/blocks', function(request, response) {
	var blocks = ['Fixed', 'Movable', 'Rotating'];
	response.send(blocks); //serializes to JSON by default is same as response.json(blocks)
});


//HTML - content-type set to text/html. Use server side templating libraries JADE for EJS
app.get('/blocksHTML', function(request, response) {
	var blocks = '<ul><li>Fixed</li><li>Movable</li></ul>';
	response.send(blocks); //sends the string as is
});

//Redirect 302 by default
app.get('/blocksredirect', function(request, response) {
	response.redirect('/parts'); //302 Moved Temporarily
});

//Redirect 301 
app.get('/blocksredirect301', function(request, response) {
	response.redirect(301, '/parts'); //301 Moved Permanently
});

app.listen(3000, function () {
	console.log('Listening on port 3000\n');
});
