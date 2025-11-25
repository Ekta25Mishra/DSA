const readlineSync=require("readline-sync");
let r= Number(readlineSync.question("Enter radius:"));
const pi=3.14;
let c=(2*Math.PI*r).toFixed(2);
console.log(`Circumfrence of circle= ${c}`);
let area=(pi*r*r).toFixed(2);
console.log(`Area of circle= ${area}`);