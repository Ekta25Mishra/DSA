const readlineSync=require("readline-sync");
let base=Number(readlineSync.question("Enter Base:"));
let expo=Number(readlineSync.question("Enter Exponent:"));
let result = base**expo;
console.log(`${base}^${expo}= ${result}`);