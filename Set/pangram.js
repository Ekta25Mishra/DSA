let sentence="asxjhwqwertyuioplkjhg";
let isPangram=false;
let set=new Set();
for(let i=0; i<sentence.length; i++){
  let ch=sentence.charAt(i);
  set.add(ch);
}
if(set.size ==26){
  isPangram=true;
}
if(isPangram){
  console.log("Given sentence is Pangram!");
}
else{
  console.log("Given sentence is not Pangram!");
}