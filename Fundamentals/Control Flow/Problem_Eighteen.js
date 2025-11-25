const readlineSync=require("readline-sync");
let num=Number(readlineSync.question("Enter number:"));
for(let i=1; i<=num; i++){
  let j=i; k=i;
  let count=0, exp=0, digit ;
  while(j>0){
    j=Math.floor(j/10);
    count++;
  }
  while(k>0){
    digit=k%10;
    exp=exp+digit**count;
    k=Math.floor(k/10);
  }
  if(exp===i){
    console.log(i);
  }
}