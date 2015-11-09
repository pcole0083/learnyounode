const net = require('net'),
	  dateFormat = require('strftime'),
	  formatString = "%F %R%n";

var   arryOfArg = process.argv.slice(2),
	  returns = [];

var server = net.createServer(function (socket) {
	// socket handling logic
	var date = new Date();
	var formatted = dateFormat(formatString, date);

	socket.end(formatted);
});
server.listen(arryOfArg[0]);

// var net = require('net')
    
// function zeroFill(i) {
//   return (i < 10 ? '0' : '') + i
// }

// function now () {
//   var d = new Date()
//   return d.getFullYear() + '-'
//     + zeroFill(d.getMonth() + 1) + '-'
//     + zeroFill(d.getDate()) + ' '
//     + zeroFill(d.getHours()) + ':'
//     + zeroFill(d.getMinutes())
// }

// var server = net.createServer(function (socket) {
//   socket.end(now() + '\n')
// })

// server.listen(Number(process.argv[2]))

