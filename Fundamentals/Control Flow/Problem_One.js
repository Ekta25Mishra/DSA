const readlineSync=require("readline-sync");
const num1=Number(readlineSync.question("Enter first number:"));
const num2=Number(readlineSync.question("Enter second number:"));
const num3=Number(readlineSync.question("Enter third number:"));

if(num1>num2){
  if(num1>num3){
    console.log(`${num1} is the greatest.`);
  }
  else{
    console.log(`${num3} is the greatest.`);
  }
}
else{
  if(num2>num3){
    console.log(`${num2} is the greatest.`);
  }
  else{
    console.log(`${num3} is the greatest.`);
  }
}