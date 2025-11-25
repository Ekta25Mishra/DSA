let arr=[10,4,5,1,2,3,9]
let n=arr.length, min;
for(let j=0; j<n-1; j++){
  min=j;
  for(let i=j+1; i<n; i++){
    if(arr[min]>arr[i]){
      min=i;
  }

}

if(j!==min){
  let temp=arr[j];
arr[j]=arr[min]
arr[min]=temp;
}
}
console.log(arr);
