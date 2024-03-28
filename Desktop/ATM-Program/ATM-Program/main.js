import inquirer from "inquirer";
let myBalance = 50000;
let myPin = 2007;
let pinAnswer = await inquirer.prompt({
    message: " Please Enter your pin Number ?",
    name: "pin",
    type: "number"
});
if (pinAnswer.pin === myPin) {
    let operatorAns = await inquirer.prompt({
        message: "please select option",
        name: "operation",
        type: "list",
        choices: ["500", "1000", "3000", "5000", "10000", "withdraw", "check your Balance"]
    });
    // Fast Amount section!
    if (operatorAns.operation === "500" ||
        operatorAns.operation === "1000" ||
        operatorAns.operation === "3000" ||
        operatorAns.operation === "5000" ||
        operatorAns.operation === "10000") {
        let fastCash = await inquirer.prompt({
            message: "Are you shour : you say (YES) or (NO) !",
            name: "option",
            type: "list",
            choices: ["YES", "NO"]
        });
        if (fastCash.option === "YES") {
            myBalance -= operatorAns.operation;
            console.log(`Your Remaining (current) Balance is ${myBalance}`);
            console.log(`Thanks for visiting to Hasnain Branch !`);
            console.log(`For any quires and problem contact us through E-mail:hasnainatif2007gmail.com `);
        }
        else if (fastCash.option === "NO") {
            console.log(`Please Re-Enter yor withdraw Amount ? again !`);
            console.log("Thanks come again ! ");
        }
    }
    // withdraw  section!
    if (operatorAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt({
            message: "Please enter your Amount !",
            name: "amount",
            type: "number"
        });
        if (amountAns.amount <= myBalance) {
            myBalance -= amountAns.amount;
            console.log(`Your Remaining (current) Balance is ${myBalance}`);
            console.log(`Thanks for visiting to Hasnain Branch !`);
            console.log(`For any quires and problem contact us through E-mail:hasnainatif2007gmail.com `);
        }
        else {
            console.log(`you Don't Withdraw ${amountAns.amount} amount`);
            console.log(`Thanks for visiting to Hasnain Branch !`);
            console.log(`For any quires and problem contact us through E-mail:hasnainatif2007gmail.com `);
        }
    }
    else if (operatorAns.operation === "check your Balance") {
        console.log(`Your current Balance is ${myBalance}`);
        console.log(`Thanks for visiting to Hasnain Branch !`);
        console.log(`For any quires and problem contact us through E-mail:hasnainatif2007gmail.com `);
    }
}
else {
    console.log(`your pin Number is incorrect please try again !`);
}
