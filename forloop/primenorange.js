var readlineSync = require("readline-sync");
const lowerNo = readlineSync.question("Enter lower number: ");
const higherNo = readlineSync.question("Enter higher number: ");

console.log(
  `The prime numbers between ${lowerNo} and ${higherNo} are:`
);

for (let i = lowerNo; i <= higherNo; i++) {
  let flag = 0;

  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      flag = 1;
      break;
    }
  }

  if (i > 1 && flag == 0) {
    console.log(i);
  }
}
