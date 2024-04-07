#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    PKR: 1,
    USD: 0.0036,
    EUR: 0.0033,
    INR: 0.3,
    GBP: 0.0028,
    CAD: 0.00489,
    JPY: 0.5457,
    CHF: 0.0032,
    SGD: 0.00485,
    LKR: 1.076,
    SAR: 0.013,
    TRY: 0.1153,
    QAR: 0.013, //QATARI RIYAL
};
let ans = await inquirer.prompt([
    {
        name: "from",
        message: "enter from Currency! ",
        type: "list",
        choices: [
            "PKR",
            "USD",
            "EUR",
            "INR",
            "GBP",
            "CAD",
            "JPY",
            "CHF",
            "SGD",
            "LKR",
            "SAR",
            "TRY",
            "QAR",
        ],
    },
    {
        name: "to",
        message: "enter to Currency! ",
        type: "list",
        choices: ["PKR", "USD", "EUR", "INR", "GBP"],
    },
    {
        name: "amount",
        message: "Enter your amount",
        type: "number",
    },
]);
let from_amount = currency[ans.from];
let to_amount = currency[ans.to];
let amount = ans.amount;
let baseAmount = amount / from_amount;
let newAmount = baseAmount * to_amount;
console.log(newAmount);
