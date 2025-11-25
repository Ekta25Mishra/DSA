const readlineSync=require("readline-sync");
let n=Number(readlineSync.question("Enter size of array: "));
let arr= new Array(n);
for(let i=0; i<n; i++){
  let size=Number(readlineSync.question("Enter size of inner array: "));
  arr[i]=new Array(size);
}
for(let i=0; i<n; i++){
  for(let j=0; j<arr[i].length; j++){
    arr[i][j]= Number(readlineSync.question("Enter element: "));
  }
}
for(let i=0; i<n; i++){
  console.log(arr[i]);
  
}
// for(let i=0; i<n; i++){
//   for(let j=0; j<arr[i].length; j++){
//     process.stdout.write(`${arr[i][j]} `);
//   }
//   console.log();
// }
// console.log(arr);
