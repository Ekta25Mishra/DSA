let arr=[1,2,32,77,4,5,6];
let item=5,i;
let found=0;
for(i=0; i<arr.length; i++){
  if(arr[i]==item){
    found=1;
    break;
  }
}
if(found){
  console.log(`Found at index ${i}`);
}
else{
  console.log('-1');
  
}