var readlineSync = require('readline-sync');
var i;
var sum=0;
const n = readlineSync.question("Enter a number: ");
for(i=1;i<=n;i++)
{
sum=sum+ (1/i);
}
console.log("nSum="+sum);