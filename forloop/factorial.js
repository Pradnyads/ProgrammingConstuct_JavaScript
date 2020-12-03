var readlineSync = require("readline-sync");
const value = readlineSync.question("Enter a number :");

function factorial(num) {
  if (num === 0 || num === 1) return 1;

  for (var i = num - 1; i >= 1; i--) {
    num = num * i;
  }
  return num;
}
console.log(factorial(value));
