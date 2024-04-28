#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let balamount = 10000;
let pin = 7264;
let answer = await inquirer.prompt([{
        message: "Please Enter Your Pin",
        type: "number",
        name: "pin"
    }]);
if (answer.pin === pin) {
    console.log(chalk.bold.green("You Pin Is Correct"));
    let operation = await inquirer.prompt([{
            message: "Please Select Your option",
            type: "list",
            name: "option",
            choices: ["Cash Withdraw", "Fast Cash", "Balance Inquiry"]
        }]);
    if (operation.option === "Cash Withdraw") {
        let cashAmount = await inquirer.prompt([{
                message: "Please Enter your Amount",
                type: "number",
                name: "amount"
            }]);
        if (cashAmount.amount < balamount || cashAmount.amount === balamount) {
            console.log(chalk.greenBright.bold("\t\nYour transaction is complete\t\n"));
            console.log(chalk.yellowBright("Your Remaining Balance Is", balamount - cashAmount.amount));
        }
        else {
            console.log(chalk.red.bold("Insuficiant Balance"));
        }
    }
    else if (operation.option === "Fast Cash") {
        let Fcash = await inquirer.prompt([{
                message: "Please Select Your Amount",
                type: "list",
                choices: ["500", "1000", "2000", "5000",],
                name: "amount"
            }]);
        if (Fcash.amount === "500") {
            console.log(chalk.greenBright.bold("\t\nYour transaction is complete\t\n"));
            console.log(chalk.yellowBright("Your Remaining Balance Is", balamount - 500));
        }
        else if (Fcash.amount === "1000") {
            console.log(chalk.greenBright.bold("\t\nYour transaction is complete\t\n"));
            console.log(chalk.yellowBright("Your Remaining Balance Is", balamount - 1000));
        }
        else if (Fcash.amount === "2000") {
            console.log(chalk.greenBright.bold("\t\nYour transaction is complete\t\n"));
            console.log(chalk.yellowBright("Your Remaining Balance Is", balamount - 2000));
        }
        else if (Fcash.amount === "5000") {
            console.log(chalk.greenBright.bold("\t\nYour transaction is complete\t\n"));
            console.log(chalk.yellowBright("Your Remaining Balance Is", balamount - 5000));
        }
    }
    else if (operation.option === "Balance Inquiry") {
        console.log(chalk.bold.yellowBright(`Your Account Balance Is ${balamount}`));
    }
}
else {
    console.log(chalk.redBright.bold("Incorrect Pin"));
}
