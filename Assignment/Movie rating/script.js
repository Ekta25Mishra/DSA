const readlineSync=require("readline-sync");
let movie_Name=Number(readlineSync.question("Enter Movie name:"));
let rating=Number(readlineSync.question("Enter Rating:")).toFixed(1);

if(rating>0.0 && rating<=2.0){
  console.log(`${movie_Name} is Flop`);
}
else if(rating>2.0 && rating<=3.4){
  console.log(`${movie_Name} is Semi-Hit`);  
}
else if(rating>3.4 && rating<=4.5){
  console.log(`${movie_Name} is Hit`);  
}
else if(rating>4.5 && rating<=5.0){
  console.log(`${movie_Name} is Super Hit`);  
}