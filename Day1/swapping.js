//using a third variable
let a=10;
let b=20;
let temp=a;
a=b;
b=temp;
console.log(a,b);

//using only two variables
a=a+b;
b=a-b;
a=a-b;
console.log(a,b);

//square bracket
[a,b]=[b,a];
console.log(a,b);