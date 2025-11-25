const readlineSync=require("readline-sync");
let num=Number(readlineSync.question("Enter number:"));
let og_num=num,count=0, exp=0, digit ;
while(num>0){
  num=Math.floor(num/10);
  count++;
}
let num1=og_num;
while(num1>0){
  digit=num1%10;
  exp=exp+digit**count;
  num1=Math.floor(num1/10);
}
if(og_num===exp){
  console.log(og_num," is an Armstrong number");
}
else{
  console.log(og_num,"is not an Armstrong number");
}