const http = require('http'),
	  fs = require('fs'),
	  map = require('through2-map');

var arryOfArg = process.argv.slice(2);

var server = http.createServer(function (req, res) {
	if (req.method !== 'POST') {
		return res.end('ERROR: Not a POST method\n');
	}

	req.pipe(map(function (chunk) {
      return chunk.toString().toUpperCase();
    })).pipe(res);
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