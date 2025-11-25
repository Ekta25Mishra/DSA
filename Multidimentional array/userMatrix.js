const readlineSync=require("readline-sync");
let row=Number(readlineSync.question("Enter row of array: "));
let arr= new Array(row);
let column=Number(readlineSync.question("Enter column of array: "));
for(let i=0; i<arr.length; i++){
  arr[i]=new Array(column);
}
for(let i=0; i<arr.length; i++){
  for(let j=0; j<arr[i].length; j++){
    arr[i][j]=Number(readlineSync.question(`Enter elements:`));
  }
}
for(let i=0; i<arr.length; i++){
  for(let j=0; j<arr[i].length; j++){
    process.stdout.write(`${arr[i][j]} `)
  }
  console.log();
}
