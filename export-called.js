var mymodule = require('./module-1');

var arryOfArg = process.argv.slice(2),
	filePath = arryOfArg[0],
	filterProp = arryOfArg[1];

var stout = function(err, data) {
	if(!!err){
		console.error(err);
	}

	if(!!data && data.length) {
		data.forEach(function(fileName){
			console.log(fileName);
		});
	}
};

mymodule(filePath, filterProp, stout);