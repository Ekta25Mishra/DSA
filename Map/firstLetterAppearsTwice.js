let s="abcdbdcqa";
let map=new Map()
for(let i=0 ; i<s.length; i++){
  let ch=s.charAt(i);
  if(map.has(ch)){
    console.log(`${ch} is the first letter appears twice.`);
    break;
  }
  else{
    map.set(ch);
  }
}
