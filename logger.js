//CommonJS export
module.exports = function(request, response, next) {
	var start = +new Date(); //plus sign convent dateObj to milliseconds
	var stream = process.stdout;
	var url = request.url;
	var method = request.method;

	response.on('finish', function () {
		var duration = +new Date() - start;
		var message = method + ' to ' + url +
			'\n took ' + duration + ' ms \n\n';
		stream.write(message);
	});

	next();
}