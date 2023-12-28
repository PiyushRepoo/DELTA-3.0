// "this" in JS

// const student = {
//     name: "Piyush",
//     age: 19,
//     eng: 95,
//     math: 93,
//     phy: 97,
//     getAvg(){
//         let avg = (this.eng + this.math + this.phy) / 3;
//         console.log(avg);
//     }
// }

// student.getAvg();

// try and catch in JS

// try {
//     console.log(a);
// } catch (error) {
//     console.log("Error Occur");
//     console.log(error);
// }

// Arrow function

// const sum = (a,b) =>{
//     console.log(a + b);
// }

// sum(2,5);

// implicit return in arrow function

// const sum = (a, b) => (a + b);


// setTimeout function 
// setTimeout(() => {
//     console.log("Apna College");
// }, 4000);

// console.log("Welcome to");


// Set interval function 

// console.log("Welcome To");
// let id = setInterval(() => {
//     console.log("Apna College");
// }, 2000);

// clearInterval(id); // use to stop the execution of setInterval function


// Practice Qs 1
const sqr = (n) => (n*n);

// Practice Qs 2
let id = setInterval(() => {
    console.log("Hello World");
}, 2000);

setTimeout(() => {
    clearInterval(id)
}, 10000);