let a1=[1,3,5,7];
let a2=[2,4,6,8];
let i=0, j=0;
let arr=[];
while(i<a1.length && j<a2.length){
  if(a1[i]<a2[j]){
    arr.push(a1[i]);
    i++;
  }
  else{
    arr.push(a2[j]);
    j++;
  }
}
while(i<a1.length){
  arr.push(a1[i]);
    i++;
}
while(j<a2.length){
  arr.push(a2[j]);
    j++;
}
console.log(arr);
