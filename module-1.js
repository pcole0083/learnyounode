
module.exports = function(dir, extname, callback) {
	var fs = require('fs');
	var path = require('path');

	var readCallback = function(err, list){
		if(!!err){
			return callback(err);
		}
		
		if(!err && list.length > 0) {

			var filteredList = list.filter(function(file){
				return path.extname(file) === '.'+extname;
			});

			if(!!callback && callback instanceof Function){
				return callback(null, filteredList);
			}
		}
	}

	fs.readdir(dir, readCallback);
};