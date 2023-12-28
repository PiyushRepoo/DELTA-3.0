// hello function

// function hello() {
//     console.log("hello");
// }

// hello();

// function print1to10() {
//     for(let i = 1; i<=10; i++){
//         console.log(i);
//     }
// }

// print1to10();

// is adult
// function isAdult() {
//     let age = 19;
//     if(age >= 18){
//         console.log("Adult");
//     }else{
//         console.log("Not Adult");
//     }
// }

// isAdult()

// Practice Qs
// function poem(){
//     console.log("Twinkle Twinkle, little star.");
//     console.log("How I wonder what you are.");
//     console.log("Up above the world so high.");
//     console.log("Like a diamond in the sky.");
//     console.log("Twinkle twinkle little star.");
//     console.log("How I wonder what you are.");
// }

// poem();

// roll dice function
// function rollDice(){
//     let dice = Math.floor(Math.random()*6)+1;
//     console.log(dice);
// }

// rollDice();

// Function with arguments
// function printInfo(name,age){
//     console.log(`${name}'s age is ${age}`);
// }

// printInfo("Piyush Kumar", 19);
// printInfo("Karan");

// Add two Number
// function add(a,b){
//     let sum = a + b;
//     console.log(sum);
// }

// add(2,54)

// Average of 3 no
// function calcAvg(a,b,c){
//     let avg = (a+b+c)/3;
//     console.log(avg);
// }

// calcAvg(2,3,4);

// Multiplication table
// function table(n) {
//     for (let i = 1; i <= 10 ; i++){
//         let table = i * n;
//         console.log(table);
//     }
// }

// table(5)

// function getSum(n) {
//   let sum = 0;
//   for (i = 1; i <= n; i++) {
//     sum = sum + i;
//   }
//   return sum;
// }


// // global scope 
// let number = 10;

// // function scope 
// function funName() {
//   let number = 15;
//   console.log(number);
// }

// console.log(number); // global scope variable
// funName(); // function scope variable 

// lexical scope 
// function outer() {
//   let a = 5;
//   let b = 7;
//   function inner() {
//     console.log(a, b);
//   }

//   inner()
// }

// outer()

// Higher order function 
// function multipleGreet(func,n){
//   for(let i = 1; i<=n; i++){
//     func();
//   }
// }

// let greet = function () {
//   console.log("Namaste");
// }

// multipleGreet(greet, 15);

