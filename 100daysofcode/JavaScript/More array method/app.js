// forEach
// let arr = [2, 5, 5, 7, 4, 6];

// arr.forEach((number, index) => {
//     console.log(number * 2, "From index",index);
// })

// const users = [
//     {firstName: "harshit", age: 23},
//     {firstName: "mohit", age: 21},
//     {firstName: "nitish", age: 22},
//     {firstName: "garima", age: 20},
// ]

// users.forEach(function(users){
//     console.log(users.firstName);
// })

// let arr = [1, 2, 3, 4, 5];

// arr.forEach((elem) => {
//         console.log(elem);
// });

// let arr = [
//     {
//         name: "Piyush",
//         age: 19
//     },
//     {
//         name: "Aman",
//         age: 35
//     },
//     {
//         name: "Harsh",
//         age: 23
//     }
// ];

// arr.forEach((student) => {
//     console.log(student.age);
// });

// Map method

// let arr = [1, 2, 5, 4, 6];

// let double = arr.map((el) => {
//     return el * 2;
// });

// console.log(double);
// console.log(arr);

// let student = [
//   {
//     name: "Piyush",
//     marks: 95,
//   },
//   {
//     name: "Aman",
//     marks: 97,
//   },
//   {
//     name: "Harsh",
//     marks: 92,
//   },
// ];

// let gpa = student.map((el) => {
//     return el.marks / 10;
// });

// console.log(gpa);

// filter method

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// let even = arr.filter( (el) => el % 2 != 0);

// console.log(even);

// Every method

// let num = [1, 2, 3, 4];

// // let ans = num.every((el) => (el % 2 == 0));
// // let ans = num.every((el) => (el % 2 != 0));

// let num2 = [2, 4, 6, 8];

// let ans2 = num2.every((el) => (el % 2 == 0));

// some method
// let number = [10, 3, 8];

// let ans = number.some((num) => (num % 2 != 0)); // false

// // Reduce method
// let arr = [1, 3, 4, 6];

// let finalVal = arr.reduce((res, el) => res + el);

// console.log(finalVal);

// Maximum in array

// let arr = [1, 3, 5, 4, 7, 9];

// let ans = arr.reduce((accumulator, currentVal) => {
//     if(accumulator < currentVal){
//         return currentVal
//     }else {
//         return accumulator
//     }
// });

// Practice Qs 1.
// let num = [10, 20, 30, 50];

// let ans = num.every((el) => {
//     return el % 10 === 0;
// });

// Practice Qs 2.
// let numbers = [5, 7, 9, 5, 6, 12];

// const getMin = (arr) => {
//   let min = arr.reduce((accumulator, currentVal) => {
//     if (accumulator < currentVal) {
//       return accumulator;
//     } else {
//       return currentVal;
//     }
//   });

//   return min;
// };

// Default parameters
// function sum(a, b = 3) {
//     // return a + b;
//     console.log(a + b);
// };

// console.log(Math.min(3,2,5)); // 2
// console.log(Math.max(3,2,5)); // 5

// Spread (...)
// let name = "PIYUSH";
// let arr = [1, 2, 3, 4, 5];

// console.log(...name); // P I Y U S H
// console.log(...arr); // 1 2 3 4 5

// let name = "piyush";
// let newName = [...name];
// console.log(newName);

// let num = [1, 2, 3, 4, 5, 6];

// let newNum = [...num];
// console.log(num);
// newNum.push(7,8)
// console.log(newNum);

// let odd = [1, 3, 5, 7];
// let even = [2, 4, 6, 8];

// let nums = [...odd, ...even];
// console.log(nums);

// spread with objects
// const data = {
//     email: "hi@gmail.com",
//     password: "abc"
// }

// const dataCopy = {...data, id: 123, country: "India"}

// console.log(dataCopy);

// let obj = {..."hi"}
// console.log(obj);

// Rest: Allows a function to take indefinite arguuments and bundle them in an array.

// function min(...args){
//     let min = args.reduce((accum, el) => {
//         if(accum < el){
//             return accum;
//         }else{
//             return el;
//         }
//     });

//     return min;
// };

// function max(...args){
//     let max = args.reduce((accum, el) => {
//         if(el > accum){
//             return el;
//         }else{
//             return accum;
//         }
//     });

//     return max;
// };


// destructuring: storing value of an array and object into multiple variable.
// let names = ["tony", "bruce", "peter", "steve", "jarvis"];

// let [ironman, hulk, ...otherNames] = names;
// console.log(ironman, hulk, otherNames);


// Destructuring(Object):
// const student = {
//     name: "karan",
//     class: 9,
//     rollNo: 7,
//     subject: ["hindi", "english", "math", "science"],
//     username: "karan@123",
//     password: "abcd"
// };

// let {username: user, password} = student;
// console.log(user, password);
