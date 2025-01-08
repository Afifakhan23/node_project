#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from 'chalk';

console.log(chalk.magentaBright.bold.italic("\n \t\t\t Welcome to Smart Pro Calculator \n"));
console.log(chalk.yellowBright.bold("=".repeat(70)));

const answer = await inquirer.prompt([
    { message: chalk.greenBright.bold("Enter your First Number :"), type: "number", name: "firstNumber" },
    { message: chalk.greenBright.bold("Enter your Second Number :"), type: "number", name: "SecondNumber" },
    { message: chalk.greenBright.bold("Choose operator :"), type: "list", name: "operator", choices: ["Addition", "Substraction", "Multiplication", "Division"] }
]);

console.log(chalk.yellowBright.bold("=".repeat(70)));

if (answer.operator === "Addition") {
    console.log(chalk.red(`The Answer of ${answer.firstNumber} + ${answer.SecondNumber} = ${answer.firstNumber + answer.SecondNumber}`));

} else if (answer.operator === "Substraction") {
    console.log(chalk.blue(`The Answer of ${answer.firstNumber} - ${answer.SecondNumber} = ${answer.firstNumber - answer.SecondNumber}`))
} else if (answer.operator === "Multiplication") {
    console.log(chalk.magenta(`The Answer of ${answer.firstNumber} * ${answer.SecondNumber} = ${answer.firstNumber * answer.SecondNumber}`))
} else if (answer.operator === "Division") {
    console.log(chalk.yellow(`The Answer of ${answer.firstNumber} / ${answer.SecondNumber} = ${answer.firstNumber / answer.SecondNumber}`))
} else {
    console.log("choose valid operator");
}

