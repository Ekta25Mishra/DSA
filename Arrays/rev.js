let arr=[1,2,3,4,5,6];
let arr2= new Array(arr.length);
let j=0;
for(let i=arr.length-1; i>=0; i--){
  arr2[j]=arr[i];
  j++;
}
console.log(arr2);
