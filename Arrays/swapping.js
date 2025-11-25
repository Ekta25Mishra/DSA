let arr=[1,1,0,1,0,1,1,0,0];
let i=0, j=0;
for(i=0;i<arr.length; i++){
  if(arr[i]===0){
    let temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
    j++;
  }
}
console.log(arr);
