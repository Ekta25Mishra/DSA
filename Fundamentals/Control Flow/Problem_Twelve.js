const readlinesync=require("readline-sync");
let num=Number(readlinesync.question("Enter a number:"));
let isPrime=true;
if(num<=1){
  isPrime=false;
}
else{
  for(let i=2; i<=Math.sqrt(num); i++){
    if(num%i===0){
      isPrime=false;
    }
    else{
      isPrime=true;
    }
  }
}
if(isPrime){
  console.log("Prime number");
}
else{
  console.log("Not a prime number");
}