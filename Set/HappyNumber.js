let n=100;
let num=n;
let set=new Set();
while(n!=1){
  let sum=0;
  while(n>0){
    let rem=n%10;
    sum=sum+(rem*rem);
    n=Math.floor(n/10);
  }
  if(sum == 1){
    console.log(`${num} is a happy number.`);
  }
  if(set.has(sum)){
    console.log(`${num} is not a happy number.`);
    break;
  }
  else{
    set.add(sum);
  }
  n=sum;
}