#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let yourBalance = 100000; //dollar
let myPin =1234;

console.log(chalk.magentaBright.bold.italic("\n \t\t\t Welcome to ATM machine \n"));
console.log(chalk.yellowBright.bold("=".repeat(70)));

let pinResult = await inquirer.prompt({
    name:"pin",
    message: "Enter your Pin [1234]:",
    type:"number"
})
if(pinResult.pin===myPin){
    console.log(chalk.greenBright("\n \t\tYour Pin is Correct. Login Successful!"));
    console.log(chalk.yellowBright.bold("=".repeat(70)));
    
    let operationAns = await inquirer.prompt([
        {
        name:"operation",
        message: "Please Select an Operation:",
        type:"list",
        choices:["withdraw","check balance"]
        }
    ])
    if(operationAns.operation === "withdraw"){
        let amountAns = await inquirer.prompt({
            name:"amount",
            message: "Enter Amount to Withdraw: ",
            type:"number"
        })
        yourBalance -=amountAns.amount;
        console.log(chalk.greenBright.italic('$')+chalk.italic.bold(`${amountAns.amount} Withdraw Successfully`));
        console.log(chalk.yellowBright.bold("=".repeat(70)));

        console.log(chalk.bgCyanBright.blackBright.bold.italic("Your Remaining Balance = " + chalk.greenBright.bold.italic("$") + yourBalance));
        
    }else{
        console.log(chalk.bgCyanBright.blackBright.bold.italic(`Your Current Account Balance $${yourBalance}`));
        
    }
}else{
    console.log(chalk.redBright.italic("Your Pin Number is Invalid"));
    
}


