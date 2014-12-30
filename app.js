var express = require('express');
var app = express();

var logger = require('./logger');
app.use(logger);

/********************/
/* Chapter 1 */
/********************/
/*
//Item 1 - Hello World
app.get('/', function(request, response) {
	//response.send('Hellow World\n');
	response.write('Hello World\n');
	response.end();
});

//Item 2 - Response and Content-Type
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

//Item 3 - Redirect
//Redirect 302 by default
app.get('/blocksredirect', function(request, response) {
	response.redirect('/parts'); //302 Moved Temporarily
});

//Redirect 301 
app.get('/blocksredirect301', function(request, response) {
	response.redirect(301, '/parts'); //301 Moved Permanently
});*/


/********************/
/* Chapter 2 */
/********************/
//Item 1 - Serving static files
/*
/*app.get('/', function(request, response) {
	response.sendFile(__dirname + '/public/index.html');
});* /
//Alternatively you can use express static
app.use(express.static('public'));

//Item 2 - Jqery AJAX call
app.get('/blocks', function(request, response) {
	var blocks = ['Fixed', 'Movable', 'Rotating'];
	response.json(blocks); 
});

//Item 3 - logger - check logger.js
*/

/********************/
/* Chapter 3 */
/********************/
//Item 1 - Reading URL, querystring
/*app.get('/blocks', function(request, response) {
	var blocks = ['Fixed', 'Movable', 'Rotating'];
	if (request.query.limit >= 0) {
		response.json(blocks.slice(0, request.query.limit));
	} else {
		response.json(blocks); 
	}
});*/

//Item 2 - Dynamic Routes
/*var blocks = {
	'Fixed': 'Fastened securely in position',
	'Movable': 'Capable of being moved',
	'Rotating': 'Moving in a circle around its center'
};

app.get('/blocks/:name', function(request, response) {
	var description = blocks[request.params.name];
	if (!description) {
		response.status(404).json('No description found for ' + request.params.name);
	} else {
		response.json(description);
	}
});*/

//Item 3 - User params 

/********************/
/* Chapter 4 */
/********************/

/********************/
/* Chapter 5 */
/********************/

app.listen(3000, function () {
	console.log('Listening on port 3000\n');
});
