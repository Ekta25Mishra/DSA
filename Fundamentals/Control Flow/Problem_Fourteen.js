const readlinesync=require("readline-sync");
let num=Number(readlinesync.question("Enter a number:"));
for(let i=2; i<=num; i++){
  if(num%i===0){
    let isPrime=true;
    for(let j=2; j<= Math.sqrt(i); j++){
      if(i%j===0){
        isPrime=false;
        break;
      }
    }
      if(isPrime){
      console.log(i);
    }
  }
}