const readlinesync=require("readline-sync");
let num=Number(readlinesync.question("Enter a number:"));
let temp=num;
let rev=0;
while(num>0){
  let rem=num%10;
  rev=rev*10+rem;
  num=Math.floor(num/10);
}
console.log(rev);
if(rev===temp){
  console.log("The number is a palindrome");
}
else{
  console.log("The number is not a palindrome");
}