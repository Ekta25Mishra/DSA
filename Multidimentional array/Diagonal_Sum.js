let arr=[
  [1,2,30],
  [4,15,6],
  [7,8,9]
];
let n=arr.length;
let L_DSum=0, R_DSum=0;
for(let i=0; i<n; i++){
  for(let j=0; j<arr[i].length; j++){
    if(i==j){
      L_DSum= L_DSum + arr[i][j];
    }
    if(i+j===n-1){
      R_DSum= R_DSum + arr[i][j];
    }
  }
}
console.log(arr);
console.log(`Left= ${L_DSum} and Right= ${R_DSum}`);
