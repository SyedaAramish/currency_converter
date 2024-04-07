import inquirer from "inquirer"


const currency: any = {
PKR:1,      //base currency
USD:0.0036,
EUR:0.0033,
INR:0.30,
GBP:0.0028,
};


let ans = await inquirer.prompt(
    [
        {
    name: "from",
    message: "enter from Currency! ",
    type: "list",
    choices: ["PKR","USD", "EUR", "INR", "GBP"],
        },
        {
            name: "to",
            message: "enter to Currency! ",
            type: "list",
            choices: ["PKR","USD", "EUR", "INR", "GBP"],
                },
                {
                    name:"amount",
                    message:"Enter your amount",
                    type:"number",
                }
    ]
)

let from_amount = currency[ans.from]
let to_amount = currency[ans.to]
let amount = ans.amount
let baseAmount = amount / from_amount
let newAmount = baseAmount*to_amount


console.log(newAmount);



