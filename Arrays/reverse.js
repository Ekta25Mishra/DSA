let arr=[1,2,3,4,5,6];
let i=0,a;
let j=arr.length-1;
while(i<j){
  a=arr[j];
  arr[j]=arr[i]
  arr[i]=a;
  i++;
  j--;
}
console.log(arr);
