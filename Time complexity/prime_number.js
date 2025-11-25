let num=5;
isPrime=true;
let temp=num/2;
if(num<=1){
  console.log("Number is less than or equal to 1, i.e., Not a Prime number.");
}
else{
for(i=2; i<=temp ;i++){
  if(num%i==0){
    isPrime=false;
    break;
  }
}
}
if(isPrime){
  console.log(num+" is a prime number.");
}
else{
   console.log(num+" is not a prime number."); 
}