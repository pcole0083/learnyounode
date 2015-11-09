const http = require('http'),
	  fs = require('fs');

var arryOfArg = process.argv.slice(2);

var server = http.createServer(function (req, res) {
	var fileStream = fs.createReadStream(arryOfArg[1]);
	fileStream.pipe(res);
});
server.listen(~~arryOfArg[0]);