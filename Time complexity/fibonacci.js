let a=0;
let b=1;
let N=10;
console.log(a);
for(i=1; i<N;i++){
  let temp=a+b;
  a=b;
  b=temp;
  console.log(a);
}