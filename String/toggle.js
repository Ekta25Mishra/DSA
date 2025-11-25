const readlineSync= require("readline-sync")
let word=readlineSync.question("Enter a string: ");
let ans="";
for(let i=0; i<word.length; i++){
  let asci=word.charCodeAt(i);
  if(asci>=65 && asci<=90){                     // Capital letter
    ans= ans+ String.fromCharCode(asci+32);
  }
  else if(asci>=97 && asci<=122){            //small letter
    ans= ans+ String.fromCharCode(asci-32);
  }
}
console.log(ans);
