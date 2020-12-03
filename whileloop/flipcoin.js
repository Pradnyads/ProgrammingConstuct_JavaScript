let Tails = 0;
let Heads = 0;
while (Heads < 11 && Tails < 11) {
  let toss = Math.floor(Math.random() * 10) % 2;
  if (toss === 0) Heads++;
  else Tails++;
}
console.log(
  "No of head wins are : " + Heads + " No of tail wins are : " + Tails
);
