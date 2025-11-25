const readlineSync=require("readline-sync");

let size=Number(readlineSync.question("Enter size of array: "));
let arr= new Array(size);

let secondSize=Number(readlineSync.question("Enter second size of array: "));
let column=Number(readlineSync.question("Enter column of array: "));

for(let i=0; i<arr.length; i++){
  arr[i]=new Array(secondSize);
}

for(let j=0; j<secondSize; j++){
  arr[j]= new Array(column);
}

for(let i=0; i<size; i++){
  for(let j=0; j<secondSize; j++){
    for(let k=0; k<column; k++){
    arr[i][j[k]]=Number(readlineSync.question(`Enter elements:`));
  }
}
}

for(let i=0; i<size; i++){
  for(let j=0; j<secondSize; j++){
    for(let k=0; k<column; k++){
    process.stdout.write(`${arr[i][j[k]]} `)
  }
}
  console.log();
}
