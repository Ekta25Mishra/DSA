const readlineSync= require("readline-sync");
let size= Number(readlineSync.question("Enter size of array:"));
let arr= new Array(size);
let sum=0;
for(let i=0; i<arr.length; i++){
  arr[i]=Number(readlineSync.question("Enter element: "));
  sum=sum+arr[i];
}
console.log(arr);
console.log(sum);

