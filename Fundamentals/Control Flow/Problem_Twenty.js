const readlineSync=require("readline-sync");
let num=Number(readlineSync.question("Enter number:"));
for(let i=1; i<=num; i++){
  let sum=0;
for(let j=1; j<i; j++){
  if(i%j===0){
    sum+=j;
  }
}
if(sum===i){
  console.log(i);
}
}