var readlineSync = require('readline-sync');
const a = readlineSync.question("Enter a value:");
var readlineSync = require('readline-sync');
const b = readlineSync.question("Enter a value:");
var readlineSync = require('readline-sync');
const c = readlineSync.question("Enter a value:");
let res1 = (a + b * c);
console.log(res1);
let res2 = (a % b + c);
console.log(res2);
let res3 = (c + a / b);
console.log(res3);
let res4 = (a * b + c);
console.log(res4);
if ( res1 > res2 && res1 > res3 && res1 > res4 ){
    console.log("max is : " +res1)
}else if ( res2 > res1 && res2 > res3 && res2 > res4 ){
    console.log("max is : " +res2)
}else if ( res3 > res1 && res3 > res2 && res3 > res4 ){
    console.log("max is : " +res3)
}else if ( res4 > res1 && res4 > res2 && res4 > res3 ){
    console.log("max is : " +res4)
}
if ( res1 < res2 && res1 < res3 && res1 < res4 ){
    console.log("min is : ", res1)
}else if ( res2 < res1 && res2 < res3 && res2 < res4 ){
    console.log("min is : ", res2)
}else if ( res3 < res1 && res3 < res2 && res3 < res4 ){
    console.log("min is : ", res3)
}else if ( res4 < res1 && res4 < res2 && res4 < res3 ){
    console.log("min is : ", res4)
}

