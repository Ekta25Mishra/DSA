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
for(let i=0; i<arr.length; i++){
  for(let j=i; j<arr[i].length; j++){
    let temp = arr[i][j];
    arr[i][j]= arr[j][i];
    arr[j][i]=temp;
  }
  console.log();
}

//rotate
for(let i=0; i<arr.length; i++){
  let k=0, j=arr[i].length-1;
  while(k<j){
    let temp = arr[i][k];
    arr[i][k]= arr[i][j];
    arr[i][j]=temp;
    k++;
    j--;
  }
  console.log();
}
console.log(arr);
