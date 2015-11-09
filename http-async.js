const http = require('http'),
	  bl   = require('bl'),
	  returns = [];

var callback = function(index){
	return function(response) {
		response.pipe(bl(function (err, data) {
			if(!!err)
				return console.error(err);
			var chars = data.toString();
			returns.push({index: index, value: chars});

			if(returns.length === arryOfArg.length){
				returns.sort(function(a, b){
					return +(a.index > b.index) || +(a.index === b.index) - 1;
				});
				returns.forEach(function(obj, i){
					//console.log(i);
					console.log(obj.value);
				});
			}
		}));
	};
};

var arryOfArg = process.argv.slice(2);

arryOfArg.forEach(function(argv, index){
	http.get(argv, callback(index));
});

