var heads = 0;
var tails = 0;
function Toss() {
  x = Math.floor(Math.random() * 2) == 0;
  if (x) {
    console.log("heads");
  } else {
    console.log("tails");
  }
}
Toss();
