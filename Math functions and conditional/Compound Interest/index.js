const readlineSync= require("readline-sync");
let p=Number(readlineSync.question("Enter Principle:"));
let r=Number(readlineSync.question("Enter rate:"));
let t=Number(readlineSync.question("Enter time:"));
let A=p* Math.pow(1+r/100,t);
let CI=A-p;
console.log(CI);
