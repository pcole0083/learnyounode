const http = require('http'),
	  bl   = require('bl');

var callback = function(response) {
	response.pipe(bl(function (err, data) {
		if(!!err)
			return console.error(err);
		var chars = data.toString();
		console.log(chars.length);
		console.log(chars);
	}));
};

http.get(process.argv[2], callback);