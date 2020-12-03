var integer = 13195;
var prime = [];
for (i = 2; i < integer / 2; i++) {
  if (integer % i == 0) {
    for (var j = 2; j <= i / 2; j++) {
      if (i % j == 0) {
        isPrime = false;
      } else {
        isPrime = true;
      }
    }
    if (isPrime == true) {
      integer /= i;
      prime.push(i);
    }
  }
}
for (var k = 0; k < prime.length; k++) {
  console.log(prime[k]);
}
