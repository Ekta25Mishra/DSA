const readlineSync=require("readline-sync");
let s=readlineSync.question("Enter a word:");
let m=s, l=0, h=s.length-1;
let arr= s.split("");
while(l<h){
  let temp= arr[l];
  arr[l]=arr[h];
  arr[h]=temp;
  l++;
  h--;
}
let rev=arr.join("");
console.log(`Original: ${m}`);
console.log(`Reversed: ${rev}`);



if(m===rev){
  console.log(`${m} is Palindrome!`);
}
  else{
    console.log(`${m} is not Palindrome!`);
    
  
}