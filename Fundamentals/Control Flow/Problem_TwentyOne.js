const readlineSync=require("readline-sync");
let num=Number(readlineSync.question("Enter number:"));
let digit, val=0, num1=num;
while(num>0){
  digit=num%10;
  let fact=1;
  for(let i=1; i<=digit; i++){
    fact=fact*i;
  }
  val+=fact;
  num=Math.floor(num/10);
}
if(num1===val){
  console.log(num1+" is a strong number");
}
else{
  console.log(num1+" is not a strong number");
}