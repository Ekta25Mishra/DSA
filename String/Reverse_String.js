const readlineSync= require("readline-sync")
let word=readlineSync.question("Enter a string: ");
let rev='';
for(let i=word.length-1; i>=0; i--){
 rev=rev+word[i];
}
console.log(rev);
