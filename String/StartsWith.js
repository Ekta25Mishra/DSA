let word=["attention","people","attire","hello","attendance"];
let s="at";
let cnt=0;
for(let i=0; i<word.length; i++){
  if(word[i].startsWith(s)) cnt++;
}
console.log(`Word with "at" comes ${cnt} times.`);
