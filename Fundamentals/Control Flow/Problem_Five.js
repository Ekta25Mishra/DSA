const readlineSync=require("readline-sync");
const unit=Number(readlineSync.question("Enter Number of units:"));
let amt=0;
if(unit<=50){
amt=unit*0.5;
}
else if(unit <=150){
  amt=50*0.5+(unit-50)*0.75;
}
else if(unit<=250){
  amt= 50*0.5 + 100*0.75 + (unit-150)*1.20;
}
else{
  amt=50*0.5 +100*0.75 + 100*1.2 + (unit-250)*1.5;
}
let surcharge=amt*0.20;
let total=surcharge+amt;
console.log(`rupees of ${unit} units are= ${total}`);