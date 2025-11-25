const readlinesync=require("readline-sync");
let num=Number(readlinesync.question("Enter a number:"));
let isPrime=true;
for(let i=2; i<=num; i++){
  for(let j=2; j<=Math.sqrt(i); j++){
    if(i%j===0){
      isPrime=false;
      break;
    }
    else{
      isPrime=true;
    }
  }
  if(isPrime){
    console.log(`${i}`)
  }
}
