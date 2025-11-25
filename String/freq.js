const readlineSync=require("readline-sync");
let s=readlineSync.question("Enter a string: ");
let freqArr=new Array(123).fill(0);
for(let i=0; i<s.length; i++){
  let ascii=s.charCodeAt(i);
  freqArr[ascii]=freqArr[ascii]+1;
}
for(let i=0; i<freqArr.length; i++){
  if(freqArr[i]>0){
    console.log(String.fromCharCode(i)+"->"+freqArr[i]);
    
  }
}
