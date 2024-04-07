#! /usr/bin/env node


import inquirer from "inquirer";



//1)let comp generate random no.
//2)user guessed no.
//3)compare both


const randomnumber = Math.floor(Math.random()*10 +1);

const answer = await inquirer.prompt([
  {
    name: "userguessednumber",
    type: "number",
    message: "guess a number ranging 1-10:",
  },
]);

if(answer.userguessednumber === randomnumber)
{console.log("you guessed correct number:)")}
else{ console.log("oops thats wrong!!")}