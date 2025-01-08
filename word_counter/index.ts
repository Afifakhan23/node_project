#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.magentaBright.bold.italic("\n \t\t\t Welcome to Word Counter \n"));
console.log(chalk.yellowBright.bold("=".repeat(70)));


const answer = await inquirer.prompt([
    {
        name:"sentence",
        type:"input",
        message:"Enter a Sentence :",
    }
])

const count = answer.sentence.trim().split(" ");

console.log(chalk.yellowBright.bold("=".repeat(70)));

console.log("=> Sentence Words:");
console.log(count);

console.log(chalk.yellowBright.bold("=".repeat(70)));
console.log(chalk.bgCyanBright.blackBright.bold.italic(`word count is : ${count.length}`));





