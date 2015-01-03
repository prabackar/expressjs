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


/*//Item 3 - User params - Massaging user data
//
var blocks = {
	'Fixed': 'Fastened securely in position',
	'Movable': 'Capable of being moved',
	'Rotating': 'Moving in a circle around its center'
};

var locations = {
	'Fixed': 'First Floor',
	'Movable': 'Second Floor',
	'Rotating': 'Penthouse'	
};

//Code from previous exercise starts
app.use(express.static('public'));
app.get('/blocks', function(request, response) {
	response.json(Object.keys(blocks)); 
});
//ends

app.param('name', function(request, response, next) {
	var name = request.params.name;
	var block = name[0].toUpperCase() + name.slice(1).toLowerCase();
	request.blockName = block;
	next();
});

app.get('/blocks/:name', function(request, response) {
	var description = blocks[request.blockName];
	if (!description) {
		response.status(404).json('No description found for ' + request.params.name);
	} else {
		response.json(description);
	}
});

app.get('/locations/:name', function(request, response) {
	var location = locations[request.blockName];
	if (!location) {
		response.status(404).json('No location found for ' + request.params.name);
	} else {
		response.json(location);
	}

});*/


/********************/
/* Chapter 4 */ 
/********************/
/*//This entire chapter requires Chapter 3 code...

//Item 1 - POST
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({extended: false}); //forces the use of native queryString module in Node library

app.post('/blocks', parseUrlencoded, function (request, response) {
	var newBlock = request.body;
	blocks[newBlock.name] = newBlock.description;
	response.status(201).json(newBlock.name)
});

//Item 2 - DELETE
app.delete('/blocks/:name', function(request, response) {
	delete blocks[request.blockName];
	response.sendStatus(200); //jquery cannot handle empty body response. so sendStatus set body to OK.
});*/

/********************/
/* Chapter 5 */
/********************/
/*//Item 1 - Route Instances - code cleanup
//Code from previous exercise starts
app.use(express.static('public'));
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({extended: false}); //forces the use of native queryString module in Node library

var blocks = {
	'Fixed': 'Fastened securely in position',
	'Movable': 'Capable of being moved',
	'Rotating': 'Moving in a circle around its center'
};

app.param('name', function(request, response, next) {
	var name = request.params.name;
	var block = name[0].toUpperCase() + name.slice(1).toLowerCase();
	request.blockName = block;
	next();
});

/*
//little cleaner routes
var blockRoute = app.route('/blocks');

blockRoute.get(function(request, response) {
	response.json(Object.keys(blocks)); 
});

blockRoute.post(parseUrlencoded, function (request, response) {
	var newBlock = request.body;
	blocks[newBlock.name] = newBlock.description;
	response.status(201).json(newBlock.name)
});
* /

//more cleaner routes - Chaining - calling functions on the return value of the previous functions;
app.route('/blocks')
	.get(function(request, response) {
		response.json(Object.keys(blocks)); 
	})
	.post(parseUrlencoded, function (request, response) {
		var newBlock = request.body;
		blocks[newBlock.name] = newBlock.description;
		response.status(201).json(newBlock.name)
	});

app.route('/blocks/:name')	
	.get(function(request, response) {
		var description = blocks[request.blockName];
		if (!description) {
			response.status(404).json('No description found for ' + request.params.name);
		} else {
			response.json(description);
		}
	})
	.delete(function(request, response) {
		delete blocks[request.blockName];
		response.sendStatus(200); //jquery cannot handle empty body response. so sendStatus set body to OK.
	});
*/
//Item 2 - Route Files - Single file with long code is code smell


app.listen(3000, function () {
	console.log('Listening on port 3000\n');
});
