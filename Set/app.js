let set=new Set();
set.add(10);
set.add(12);
set.add(11);
set.add(10);
set.add(11);
set.add(13);
set.add(51);
set.add(20);
for(let a of set){
  process.stdout.write(a+" ");
}
console.log();
console.log(set);
set.delete(12)
console.log(set);
console.log(set.has(100));
console.log(set.has(10));
console.log(set.size);
