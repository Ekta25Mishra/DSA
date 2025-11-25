const readlineSync=require("readline-sync");
let num=Number(readlineSync.question("Enter number:"));
let digit;
console.log("Strong numbers between 1 to ", num,":");
for(let i=1; i<=num; i++){
  let st=i, sum=0;
  while(st>0){
    digit=st%10;
    let fact=1;
    for(let j=1; j<=digit; j++){
      fact= fact*j;
    }
    sum+=fact;
    st=Math.floor(st/10);
  }
  if(i===sum){
    console.log(i);
  }
}