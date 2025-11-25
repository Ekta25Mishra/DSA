const readlineSync=require("readline-sync");
let a=Number(readlineSync.question("Enter a:"));
let b=Number(readlineSync.question("Enter b:"));
let c=Number(readlineSync.question("Enter c:"));
if(a+b<=c ||a+c<=b || b+c<=a){
  console.log("Invalid triangle");
}
else{
  console.log("Area of triangle is:");
  let S=(a+b+c)/2;
  let area=Math.sqrt(S*(S-a)*(S-b)*(S-c));
  console.log(area.toFixed(2));
}