const readlineSync=require("readline-sync");
let num=Number(readlineSync.question("Enter number:"));
let sum=0;
console.log(`Proper divisor of ${num} are: `);
for(let i=1; i<num; i++){
  if(num%i===0){
    console.log(i);
    sum+=i;
  }
}
if(sum===num){
  console.log(num+" is a perfect number");
}
else{
  console.log(num+" is not a perfect number");
}