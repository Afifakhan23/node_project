#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.magentaBright.bold.italic("\n \t\t\t Welcome to Currency Converter App \n"));
console.log(chalk.yellowBright.bold("=".repeat(70)));

let apiLink = "https://v6.exchangerate-api.com/v6/8b6fbc61bf419fc49ab7f637/latest/USD";

//fetching data
let fetchData = async (data:any) =>{
    let fetchData = await fetch(data);
    let response = await fetchData.json();
    return response.conversion_rates;
}
let data = await fetchData(apiLink)

//converting object into an arrays
let countries = Object.keys(data)


const firstCountry = await inquirer.prompt([
    {
        name: "name",
        type: "list",
        choices: countries,
        message: chalk.greenBright.bold("Select the Currency to Convert From : ")
    },
]);

let amount =await inquirer.prompt([
    {
        name: "amount",
        type: "input",
        message: chalk.greenBright(`Enter the Amount to Convert in ${firstCountry.name} :  `)
    },
])

const secondCountry = await inquirer.prompt([
    {
        name: "name",
        type: "list",
        choices: countries,
        message: chalk.greenBright.bold("Select the Currency to Convert into : ")
    },
]);

//conversion rate
let conversion = `https://v6.exchangerate-api.com/v6/8b6fbc61bf419fc49ab7f637/pair/${firstCountry.name}/${secondCountry.name}`;

//fetching Data for conversion rate
let conversion_Data = async (data:any) =>{
    let conversion_Data = await fetch(data);
    let response = await conversion_Data.json();
    return response.conversion_rate;
}

console.log(chalk.yellowBright.bold("=".repeat(70)));

let conversionRate = await conversion_Data(conversion)
let answer = amount.amount * conversionRate
console.log(chalk.bgCyanBright.black.bold.italic(`Your ${firstCountry.name} Currency in ${secondCountry.name} is :${answer}`));