const readlineSync=require("readline-sync");
let num=Number(readlineSync.question("Enter a number:"));
let count=0, rem=1, digit=num, div;
while(digit>0){
  digit=Math.floor(digit/10);
  count++;
}
let square= num*num;
console.log(`Square of ${num} is ${square}`);

while(count>0){
  rem=rem*10;
  count--;
}
div=square%rem;
if(div===num){
  console.log(`${num} is automorphic number.`);
  
}
else{
  console.log("not an automorphic number");
  
}
