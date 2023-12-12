// Qs 1 :

// let num = 20;

// if (num % 10 === 0) {
//     console.log("Good");
// } else {
//     console.log("Bad");
// }

// Qs 2 :
// let userName = prompt("Enter your username: ");
// let age = prompt("Enter your age: ");

// let msg = `${userName} is ${age} years old.`;

// alert(msg);

// Qs 3 :
// let quarter = 4;

// switch(quarter){
//     case 1:
//         console.log("January, February, March");
//         break;
//     case 2:
//         console.log("April, May, June");
//         break;
//     case 3:
//         console.log("July, August, September");
//         break;
//     case 4:
//         console.log("October, November, December");
//         break;
//     default:
//         console.log("Wrong quarter number");
// }

// Qs 4 :
// let str = "Amitabh Bachchan"

// if(str[0] === 'A' || str[0] === 'a' && str.length > 5) {
//     console.log("Golden string.");
// }else {
//     console.log("Not a golden string.");
// }

// Qs 5 :
// let a = parseInt(prompt("Enter first number"));
// let b = parseInt(prompt("Enter second number"));
// let c = parseInt(prompt("Enter third number"));

// if(a > b && a > c) {
//     console.log(`${a} is greater than ${b} and ${c}.`);
// }else if(b > a && b > c) {
//     console.log(`${b} is greater than ${a} and ${c}.`);
// }else {
//     console.log(`${c} is greater than ${a} and ${b}.`);
// }

// Qs 6 :
let a = 12;
let b = 13;

if(a % 10 === b % 10) {
    console.log(`${a} and ${b} have same a last digit.`);
}else{
    console.log(`${a} and ${b} have not same last digit.`);
}