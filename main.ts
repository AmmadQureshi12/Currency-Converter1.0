import inquirer from "inquirer"
import Choices from "inquirer/lib/objects/choices.js"

const currency: any = {
    USD:1, //basic currency
    INR:75.5,
    pounds:15.5,
    PKR:285
}
let any_name = await  inquirer.prompt([
        {
            name:"from",
            message:"Enter from currency",
            type: "list",
            choices:["USD","INR","pounds","PKR"]
        },
        {
            name:'to',
            message:"Enter to currency",
            type: 'list',
            choices:["USD","INR","pounds","PKR"]
            },
            {
            name:'amount',
            message:"Enter your Amount",
            type:'number'
            }
]
);

let fromamount = currency[any_name.from]
let toamount = currency[any_name.to]
let amount = any_name.amount
let baseamount = amount / fromamount

function removeDecimal(num: number): number {
    // Convert the number to a string
    let numStr: string = num.toString();

    // Find the index of the decimal point
    const decimalIndex: number = numStr.indexOf('.');

    // If decimal point exists, remove everything after it
    if (decimalIndex !== -1) {
        numStr = numStr.substring(0, decimalIndex);
    }

    // Convert the string back to a number and return
    return parseFloat(numStr);
}

let convertedamount = baseamount * toamount
let result = removeDecimal(convertedamount)
console.log(result);

