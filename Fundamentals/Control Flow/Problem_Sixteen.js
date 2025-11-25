//HCF OF TWO NUMBERS

const readlineSync=require("readline-sync");
let num1=Number(readlineSync.question("Enter num1:"));
let num2=Number(readlineSync.question("Enter num2:"));
let min, hcf=1;
if(num1<num2){
  min=num1;
}
else{
  min=num2;
}
for(let i=1; i<=min; i++){
  if(num1%i===0 && num2%i===0){
    hcf=i;
  }
}
console.log(`HCF= ${hcf}`);