var fs = require('fs');
var contentBuffer = fs.readFileSync(process.argv[2], 'utf8');
var newLines = contentBuffer.split('\n');
console.log(newLines.length-1);