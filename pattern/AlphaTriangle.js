const readlineSync=require("readline-sync")
let n=Number(readlineSync.question("Enter number of rows: "));
for(let i=1; i<=n; i++){
  let temp=65;
  for(let j=1; j<=i; j++){
    process.stdout.write(String.fromCharCode(temp)+" ");
  temp++;
  }
  console.log();
  
}