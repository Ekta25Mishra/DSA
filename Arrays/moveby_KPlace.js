const readlineSync= require("readline-sync");
let k=Number(readlineSync.question("Enter position:"));
let arr=[1,2,3,4,5,6];
k=k%arr.length;
let cnt=0;
for(let j=0; j<k; j++){
  cnt++;
  let copy=arr[0];

for(let i=0; i<arr.length-1; i++){
  arr[i]=arr[i+1];
}
arr[arr.length-1]=copy;
}
console.log(arr);
console.log(cnt);
