const readlineSync=require("readline-sync");
const num1=Number(readlineSync.question("Enter first side of triangle:"));
const num2=Number(readlineSync.question("Enter second side of triangle:"));
const num3=Number(readlineSync.question("Enter third side of triangle:"));
if(num1===num2 && num2===num3){
  console.log("It is an Equilateral triangle");
}
else if(num1==num2 || num2===num3 || num1===num3){
  console.log("It is an Isosceles  triangle");
}
else{
  console.log("It is an Scalene   triangle"); 
}