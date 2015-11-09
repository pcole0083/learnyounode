var fs = require('fs');
var callback = function(err, fileData){
	if(!err){
		var newLines = fileData.split('\n');
		console.log(newLines.length-1);
	}
	else {
		console.log(err);
	}
};
var contentBuffer = fs.readFile(process.argv[2], 'utf8', callback);
