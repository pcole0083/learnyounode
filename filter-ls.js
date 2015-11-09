var fs = require('fs');
var path = require('path');

var arryOfArg = process.argv.slice(2),
	filePath = arryOfArg[0],
	filterProp = arryOfArg[1];

var callback = function(err, list){
	if(!err && list.length > 0) {
		var filteredList = list.filter(function(file){
			return path.extname(file) === '.'+filterProp;
		});
		filteredList.forEach(function(fileName){
			console.log(fileName);
		});
	}
	else {
		console.log(err);
	}
};

fs.readdir(filePath, callback);