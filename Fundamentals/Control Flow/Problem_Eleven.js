const readlinesync=require("readline-sync");
let num=Number(readlinesync.question("Enter a number:"));
for(let i=1; i<=num; i++){
  if(num%i===0){
    console.log(i+" is a factor of "+num);
  }
}