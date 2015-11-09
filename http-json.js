const http = require('http'),
	  url = require('url'),
	  map = require('through2-map');

var arryOfArg = process.argv.slice(2);

var createDateObj = function(reqUrl){
	return new Date(url.parse(reqUrl, true).query.iso);
};

var parseTime = function(reqUrl) {
	var passedDate = createDateObj(reqUrl);
	return {
		hour: ~~passedDate.getHours(),
		minute: ~~passedDate.getMinutes(),
		second: ~~passedDate.getSeconds()
	};
};

var server = http.createServer(function (req, res) {
	var dateObj = {},
		data = '',
		query = null,
		passedDate = null;

	if (req.method !== 'GET') {
		return res.end('ERROR: Not a GET method\n');
	}

	req.on('data', function(chunk) {
	    data += chunk;
	});

	req.on('end', function() {
		var returnData = '';

		if( !!~req.url.indexOf('api/parsetime') ){
			returnData = parseTime(req.url);
		}
		else if( !!~req.url.indexOf('api/unixtime') ){
			returnData = {
				unixtime: createDateObj(req.url).getTime()
			}
		}
		else {
			returnData = 'Unknown URL passed.';
		}

		if(!!returnData){
			res.writeHead(200, { 'Content-Type': 'application/json' });
			res.write(JSON.stringify(returnData));
		}
		else {
			res.writeHead(404);
		}
		res.end();
	});
	
});
server.listen(~~arryOfArg[0]);

// var http = require('http')
// var map = require('through2-map')

// var server = http.createServer(function (req, res) {
//   if (req.method != 'POST')
//     return res.end('send me a POST\n')

//   req.pipe(map(function (chunk) {
//     return chunk.toString().toUpperCase()
//   })).pipe(res)
// })

// server.listen(Number(process.argv[2]));