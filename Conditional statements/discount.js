const readlineSync=require("readline-sync");
let amount= Number(readlineSync.question("Enter the amount: "));
let dis=0;
if(amount>=0 && amount<=5000) dis=0;
else if(amount>5000 && amount<=7000) dis=5;
else if(amount>7000 && amount<=9000) dis=10;
else if(amount>9000) dis=20;
else console.log("Invalid input!");

console.log(amount- (amount*dis)/100);

