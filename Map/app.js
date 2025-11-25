let map=new Map();
map.set("name", "Ekta");
map.set("age", 21);
map.set("Ekta", 5);
map.set("Priya", 5);
console.log(map);
map.delete("age");
console.log(map);
console.log(map.has("Ekta"));
console.log(map.get("Priya"));
console.log(map.size);
console.log(map.keys());
console.log(map.values());

for(let a of map.keys()){
  console.log(a); 
}

for(let a of map.values()){
  console.log(a);
}

for(let a of map.entries()){
  console.log(a);
}