const readlineSync=require("readline-sync");
let num=Number(readlineSync.question("Enter a number:"));
let mul=1;
while(num>0){
  let rem=num%10;
  mul=mul*rem;
  num=Math.floor(num/10);
}
console.log(`Product of digits= ${mul}`);