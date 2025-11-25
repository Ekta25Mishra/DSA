const readlinesync=require("readline-sync");
let num=Number(readlinesync.question("Enter a number:"));
let a=0, b=1;
console.log(`Fibonacci series upto ${num} terms:`);
for(let i=1; i<=num; i++){
  console.log(a);
  let temp=a;
  a=b;
  b=temp+a;
}