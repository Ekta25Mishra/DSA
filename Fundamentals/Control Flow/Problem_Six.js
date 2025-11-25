const readlineSync=require("readline-sync");
let num=Number(readlineSync.question("Enter the number:"));
let last_digit=num%10;
console.log(`Last digit = ${last_digit}`);
while(num>=10){
  num=Math.floor(num/10);
}
let first_digit=num;
console.log(`First digit= ${first_digit}`);
let sum=last_digit + first_digit;
console.log(`Sum of first and last digit = ${sum}`);