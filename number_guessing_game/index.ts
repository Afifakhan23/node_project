#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

async function startGame() {
    console.log(chalk.magentaBright.bold.italic("\n \t\t\t Welcome to Number Guessed Game  \n"));
    console.log(chalk.yellowBright.bold("=".repeat(70)));

    let playAgain = true;
    while (playAgain) {
        const numguessed: number = Math.floor(Math.random() * 10);
        let number: { guessing: number } = await inquirer.prompt([{
            type: 'number',
            name: 'guessing',
            message: 'Guess a number between 1 to 10:'
        }]);

        console.log(chalk.yellowBright.bold("=".repeat(70)));

        if (number.guessing === numguessed) {
            console.log(chalk.bgCyan(`Congratulations! You guessed the right number which is ${numguessed}`));
        } else {
            console.log(chalk.bgRed(`Sorry, you guessed the wrong number. The correct number was ${numguessed}`));
        }

        const { continuePlaying }: { continuePlaying: boolean } = await inquirer.prompt([{
            type: 'confirm',
            name: 'continuePlaying',
            message: 'Do you want to continue playing?'
        }]);

        playAgain = continuePlaying;
    }

    console.log(chalk.green("Thank you for playing!"));
}

startGame();