let arr=[10,4,30,2,19,10];
for(let i=1; i<arr.length; i++){
  let key=arr[i];
  let j=i-1;
  while(j>=0 && arr[j]>key){
    arr[j+1]=arr[j]
    j--;
  }
  arr[j+1]=key;
}
console.log(arr);
