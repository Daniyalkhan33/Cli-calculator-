import inquirer from "inquirer";
import chalk from "chalk";

// Method 1
// let answers = await inquirer.prompt([
//     {
//     name: "num1",
//     type: "number",
//     message: "Enter first number:"
//     },
//     {
//     name: "num2",
//     type: "number",
//     message: "Enter secound number:"
//     },
//     {
//     name: "operation",
//     type: "list",
//     message: "Select operation:",
//     choices: ["addition", "subtraction", "multiplication", "division"],
    
//     }
    
// ]);

// // console.log(answers)

// if(answers.operation === "addition"){
//     console.log(`the sum of two numbers = ${answers.num1 + answers.num2}`)
// }else if(answers.operation === "subtraction"){
//     console.log(`the difference between two numbers = ${answers.num1 - answers.num2}`)
// }else if(answers.operation === "multiplication"){
//         console.log(`the multiplication of two numbers = ${answers.num1 * answers.num2}`)
// }else if(answers.operation === "division"){
//         console.log(`the division of two numbers = ${answers.num1 / answers.num2}`)
// } 


// Method 2
const answers
// :{
//     // Defined type to acess variables in dot notation
//     num1:number
//     num2:number
//     operator:string
// }
= await inquirer.prompt([
    {name: "num1",
     type: "number",
     message: "Type first number:"
    },
    {name: "num2",
     type: "number",
     message: "Type secound number:"
    },
    {name: "operator",
     type: "list",
     choices: ["+","-","*","/"],
     message: "Select operator:"
    }
])
// Deconstructed code
const {num1,num2,operator} = answers

if(num1 && num2 && operator){
    // Added another variable and stored the final value in it
    let result;
    if(operator=== "+"){
        result = num1 + num2;
    }if(operator=== "-"){
        result = num1 - num2;
    }if(operator=== "*"){
        result = num1 * num2;
    }if(operator=== "/"){
        result = num1 / num2;
    }
    console.log(chalk.greenBright.bold("Your result is:"),result)


}else{
    console.log(chalk.redBright.bold("Please enter valid input!"))
}