let arr=[5,8,12,19,75,100,150,170];
let item=19;
function middle(arr, l, h){
   if (l > h) return -1; 
  mid=Math.floor((l+h)/2);
  if(arr[mid]<item){
    return middle(arr, mid+1, h);
  }
  else if(arr[mid]>item){
    return middle(arr, l,mid-1);
  }
  else{
    return mid;
  }
}
let result=middle(arr,0,7);
if(result!==-1){
  console.log(`${item} found at index ${result}.`);
}
else{
  console.log('Element not found!');
  
}
