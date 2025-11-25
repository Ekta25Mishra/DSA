let jweles="aAg";
let stones="aAAgiduq";
let set=new Set();
for(let i=0; i<jweles.length; i++){
  set.add(jweles.charAt(i));
}
let count=0;
for(let i=0; i<stones.length; i++){
  let ch=stones.charAt(i);
  if(set.has(ch)) count++;
}
console.log(count);
