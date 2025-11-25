const readlineSync=require("readline-sync")
let n=Number(readlineSync.question("Enter number of rows: "));
for(let i=1; i<=n; i++){
  for(let j=1; j<2*n; j++){
    if(i===j || i+j===2*n ){
          process.stdout.write("* ");
    }
    else{
      process.stdout.write("  ")
    }
  }
  console.log();
}