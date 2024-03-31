#!/usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
let mybalance = 50000;
const pincode = 1234;
const pinAnswer = await inquirer.prompt([{
        name: "pin",
        message: "Enter Your Pin Code",
        type: "number"
    }
]);
if (pinAnswer.pin === pincode) {
    console.log(chalk.greenBright("Your Pincode Is Correct!"));
    let operationAns = await inquirer.prompt([{
            name: "operation",
            message: "What You Want To Do?",
            type: "list",
            choices: ["Withdraw", "Check Balance", "Fast Cash", "Exit"]
        }]);
    if (operationAns.operation === "Withdraw") {
        let amountAns = await inquirer.prompt([{
                name: "Amount",
                message: "Enter Your Amount.",
                type: "number",
            }]);
        mybalance -= amountAns.Amount;
        console.log(chalk.cyan(`Your Remaining Balance Is: ${mybalance}`));
    }
    else if (operationAns.operation === "Check Balance") {
        console.log(chalk.cyan(`You Current Balace Is: ${mybalance}`));
    }
    else if (operationAns.operation === "Fast Cash") {
        let selectAmount = await inquirer.prompt([{
                name: "fastcash",
                type: "rawlist",
                message: "choose the amount you want to withdraw",
                choices: ["5000", "10000", "15000", "20000", "25000", "30000", "35000", "40000", "45000", "50000"]
            }]);
        mybalance -= selectAmount.fastcash;
        console.log(chalk.cyan(`Your Remaining Balance Is: ${mybalance}`));
    }
    else if (operationAns.operation === "Exit") {
        console.log(chalk.yellow("The Withdrawal was not successful."));
    }
}
else {
    console.log(chalk.red("Incorrect Pin Code."));
}
