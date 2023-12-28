let globalLength = 10;

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
