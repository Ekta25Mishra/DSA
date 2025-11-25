//LCM OF TWO NUMBERS

const readlineSync=require("readline-sync");
let num1=Number(readlineSync.question("Enter num1:"));
let num2=Number(readlineSync.question("Enter num2:"));
let max, lcm, i;
if(num1>num2){
  max=num1;
}
else{
  max=num2;
}
i=max;
while(true){
  if(i%num1===0 && i%num2===0){
    lcm=max;
    break;
  }
  else{
    i+=max;
  }
}
  console.log(`LCM of ${num1} and ${num2} is ${lcm}`);

