#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const chalk_1 = __importDefault(require("chalk"));
console.log(chalk_1.default.magentaBright.bold.italic("\n \t\t\t Welcome to Smart Pro Calculator \n"));
console.log(chalk_1.default.yellowBright.bold("=".repeat(70)));
const answer = await inquirer_1.default.prompt([
    { message: chalk_1.default.greenBright.bold("Enter your First Number :"), type: "number", name: "firstNumber" },
    { message: chalk_1.default.greenBright.bold("Enter your Second Number :"), type: "number", name: "SecondNumber" },
    { message: chalk_1.default.greenBright.bold("Choose operator :"), type: "list", name: "operator", choices: ["Addition", "Substraction", "Multiplication", "Division"] }
]);
console.log(chalk_1.default.yellowBright.bold("=".repeat(70)));
if (answer.operator === "Addition") {
    console.log(chalk_1.default.red(`The Answer of ${answer.firstNumber} + ${answer.SecondNumber} = ${answer.firstNumber + answer.SecondNumber}`));
}
else if (answer.operator === "Substraction") {
    console.log(chalk_1.default.blue(`The Answer of ${answer.firstNumber} - ${answer.SecondNumber} = ${answer.firstNumber - answer.SecondNumber}`));
}
else if (answer.operator === "Multiplication") {
    console.log(chalk_1.default.magenta(`The Answer of ${answer.firstNumber} * ${answer.SecondNumber} = ${answer.firstNumber * answer.SecondNumber}`));
}
else if (answer.operator === "Division") {
    console.log(chalk_1.default.yellow(`The Answer of ${answer.firstNumber} / ${answer.SecondNumber} = ${answer.firstNumber / answer.SecondNumber}`));
}
else {
    console.log("choose valid operator");
}
