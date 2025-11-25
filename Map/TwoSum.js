let arr=[11,2,15,7];
let target=9;
let ans=[-1,-1];
let map=new Map();
for(let i=0; i<arr.length; i++){
 if(map.has(target-arr[i])){
  ans[0]=i;
  ans[1]=map.get(target-arr[i]);
 }
 else{
  map.set(arr[i], i);
 }
}
console.log(ans);


