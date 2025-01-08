#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer"
let todo_list = [];
let condition = true;

console.log(chalk.magenta.bold.italic("\n \t\tWelcome to your To-Do List \n"));
console.log(chalk.yellowBright.bold("=".repeat(70)));

while(condition){
    let todoTask =await inquirer.prompt([{
        name:"task",
        type:"input",
        message:chalk.greenBright.bold("Enter a New Task :")
    }])
    todo_list.push(todoTask.task)
    console.log(chalk.blue.bold(`${todoTask.task} Task added Successfully`));
    let add_more =await inquirer.prompt([{
        name:"moreTask",
        type:"confirm",
        default:"false",
        message:"Do you want to add more task :"
    }])
    condition =add_more.moreTask

}
console.log(chalk.bgMagenta.black.bold("your updated TODO List :", todo_list));
