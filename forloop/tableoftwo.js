var readlineSync = require('readline-sync');
const n = readlineSync.question("Enter a up to power you want number: ");
for (i=0; i<= n; i++)
{
p = 2 * i;
console.log("power of 2 "+ p);
}