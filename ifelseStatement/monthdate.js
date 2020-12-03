var readlineSync = require('readline-sync');
var currentDate = readlineSync.question("Enter your date: ");

var startDate = new Date('20/03/2020');
var lastDate = new Date('20/06/2020');

if (currentDate > startDate && currentDate < lastDate ){
console.log('true')
}
else{
console.log('false')
}