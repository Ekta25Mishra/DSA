const readlineSync= require("readline-sync");
let size= Number(readlineSync.question("Enter size of array:"));
let arr= new Array(size);
let sum=0;
for(let i=0; i<arr.length; i++){
  arr[i]=Number(readlineSync.question("Enter element: "));
  sum=sum+arr[i];
}
console.log(arr);
let max=Math.max(arr[0], arr[1]);
let min=Math.min(arr[0], arr[1]);
for(let i=2; i<arr.length; i++){
  if(arr[i]>max){
    min=max;
    max=arr[i];
  }
  else if(arr[i]>min && arr[i] !== max){
    min=arr[i];
  }
}
console.log(`Second maximum element is ${min}`);
