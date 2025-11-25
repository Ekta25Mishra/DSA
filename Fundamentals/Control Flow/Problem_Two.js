const readlineSync=require("readline-sync");
const ch= readlineSync.question("Input any character:");
if(ch>='a' && ch<='z' || ch>='A' && ch<='Z'){
  console.log("Input is an alphabet");
}
else if(ch>=0 && ch<=9){
  console.log("Input is a digit");
}
else{
  console.log("Input is a special character");
}