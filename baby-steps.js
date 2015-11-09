
var numbersArry = process.argv.slice(2),
	sum = 0;
for (var i = 0; i < numbersArry.length; i++) {
	sum += ~~numbersArry[i];
}
//console.log(process.argv);
console.log(sum);
