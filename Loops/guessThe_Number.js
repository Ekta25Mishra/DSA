let num= Math.floor(Math.random()*100 +1);
const readlineSync=require("readline-sync");
let user;
do{
  user=Number(readlineSync.question("Guess the number between 1 and 100:"));
  if(isNaN(user) || user<0 || user>100){
    console.log("Enter valid input!");
    continue;
  }
  if(user>num) console.log("Too high! try again");
  else if(user<num) console.log("Too low! try again");
  else console.log("Congratulations 🎉 and number was "+num);
}while(user!==num);

