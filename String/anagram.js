const readlineSync=require("readline-sync");
let s1=readlineSync.question("Enter string one: ");
let s2=readlineSync.question("Enter string two: ");
let freqArr=new Array(123).fill(0);

if(s1.length!= s2.length){
  console.log("Given strings are not anagram!");
}
else{
  let isAnagram=true;
  for(let i=0; i<s1.length; i++){
    let asci=s1.charCodeAt(i);
    freqArr[asci] =freqArr[asci] + 1;
  }
  for(let i=0; i<s2.length; i++){
    let asci=s2.charCodeAt(i);
    freqArr[asci] =freqArr[asci]- 1;
  }
  for(let i=0; i<freqArr.length; i++){
    if(freqArr[i] !=0){
      isAnagram=false;
      break;
    }
  }
  if(isAnagram){
    console.log("Given strings are anagram!");
  }
  else{
    console.log("Given strings are not anagram!");
  }
}
