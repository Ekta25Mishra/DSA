const readlineSync=require("readline-sync")
let n=Number(readlineSync.question("Enter number of rows: "));
for(let i=1; i<=n; i++){
  for(let j=n; j>=i; j--){
    process.stdout.write("* ");
  }
  console.log();
}