#! /usr/bin/env node
import inquirer from "inquirer";

const currency: any = {
  PKR: 1, //base currency
  USD: 0.0036, // US DOLLAR
  EUR: 0.0033, // EURO
  INR: 0.3, // INDIAN RUPEE
  GBP: 0.0028, //BRITISH POUND
  CAD: 0.00489, // CANADIAN DOLLAR
  JPY: 0.5457, // JAPANESE YEN
  CHF: 0.0032, //SWISS FRANC
  SGD: 0.00485, //SINGAPORE DOLLARS
  LKR: 1.076, //SRI LANKAN RUPEES
  SAR: 0.013, //SAUDI ARABIAN RIYALS
  TRY: 0.1153, //TURKISH LIRE
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
