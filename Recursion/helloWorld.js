const readlineSync=require("readline-sync");
let num=readlineSync.question("Enter number: ");
function temp(num){
  if(num == 0) return;
  console.log("Hello World!");
  temp(num-1);
}
temp(num);