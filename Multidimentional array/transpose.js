const readlineSync=require("readline-sync");
let row=Number(readlineSync.question("Enter row of array: "));
let arr= new Array(row);
let column=Number(readlineSync.question("Enter column of array: "));
for(let i=0; i<arr.length; i++){
  arr[i]=new Array(column);
}
//creation
for(let i=0; i<arr.length; i++){
  for(let j=0; j<arr[i].length; j++){
    arr[i][j]=Number(readlineSync.question(`Enter elements:`));
  }
}
//presentation
for(let i=0; i<arr.length; i++){
  for(let j=0; j<arr[i].length; j++){
    process.stdout.write(`${arr[i][j]} `)
  }
  console.log();
}
//transpose
let ans= Array.from({length:arr[0].length}, ()=> Array(arr.length));
for(let i=0; i<ans.length; i++){
  for(let j=0; j<ans[i].length; j++){
    ans[i][j]=arr[j][i];
  }
}
//transpose representation
for(let i=0; i<ans.length; i++){
  for(let j=0; j<ans[i].length; j++){
    process.stdout.write(`${ans[i][j]} `)
  }
  console.log();
}
