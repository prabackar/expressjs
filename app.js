var express = require('express');
var app = express();

app.use(express.static('public'));

var logger = require('./logger');
var blocks = require('./blocks');
app.use(logger);
app.use('/blocks', blocks);

app.listen(3000, function () {
	console.log('Listening on port 3000\n');
});
