#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import figlet from "figlet";
figlet.defaults({fontPath: "assets/fonts"});

function ready(){
  console.log(figlet.textSync("WELCOME!!!"));
  
}

async function numberGuess() {
    let randNumber = Math.floor(Math.random() * (5));
    let turns = 0;

    while (true) {
        let guessNumber = await inquirer.prompt({
            name: "Guess",
            type: "number",
            message: (chalk.greenBright("Please enter your guess number between 0 and 5 : "))
        })


        if (guessNumber.Guess > randNumber) {
            console.log(chalk.bgRedBright("The entered number is bigger, Try another number : "));
        } else if (guessNumber.Guess < randNumber) {
            console.log(chalk.bgRedBright("The entered number is smaller, Try another number : "));
        } else if (guessNumber.Guess === randNumber) {
            console.log(chalk.bgBlueBright("Hurrah!!!, The entered guess is accurate : "));
            break
        } else {
            console.log(chalk.greenBright("Please enter the required number : "));
        }
        turns++;
    }
    console.log(chalk.bgBlueBright(`Your attempts to correctly guess were : ${turns}`))
}

async function tryAgain() {
    while (true) {
        let play = await inquirer.prompt({
            name:"again",
            type: "input",
            message:(chalk.greenBright("Do you want to play the Number Guess Game ? (Y/N) : "))
        })
        if (typeof play.again === "string") {
            if (play.again === "y" || play.again === "Y") {
                await numberGuess();
            } else if (play.again === "n" || play.again === "N") {
                console.log(chalk.greenBright("Good Luck!!! Till next time"));
                break;
            } else {
                console.log(chalk.greenBright("Enter the Correct Option "));
            }
        }

    }
}
ready();
tryAgain();