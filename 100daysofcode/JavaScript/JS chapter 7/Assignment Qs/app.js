// Qs1.
// let arr = [2, 4, 6, 8];

// const arrayAverage = (arr) => {
//     let avg = 0;
//     for(let i = 0; i<arr.length; i++){
//         avg += arr[i];
//     }
//     return avg /= arr.length;
// }

// Qs2.
// let num = 2;

// const isEven = (num) =>{
//     if(num%2 == 0){
//         console.log(`${num} is an even number`);
//     }else {
//         console.log(`${num} is not an even number`);
//     }
// }

// 2nd Approach // returns true or false
// const isEven = (num) => num%2 == 0;

// Qs3.
// use bind method
// const object = {
//   message: "Hello, World!",

//   logMessage() {
//     console.log(this.message);
//   },
// };

// setTimeout(object.logMessage.bind(object), 5000);

// setTimeout(object.logMessage, 1000);

// using arrow function 
// setTimeout(() => object.logMessage(), 3000);



// Qs4.
// let globalLength = 10;

// function callback() {
//   console.log(this.length);
// }

// const customObject = {
//   length: 8,
//   method(callback) {
//     callback();
//   },
// };

// const anotherObject = {
//   length: 15,
//   method(callback) {
//     callback();
//   },
// };

// // Using callback with different contexts
// customObject.method(callback.bind(customObject)); // Output: 8
// anotherObject.method(callback.bind(anotherObject)); // Output: 15

// // Using the original callback in the global context
// callback(); // Output:globalLength -- window.length
