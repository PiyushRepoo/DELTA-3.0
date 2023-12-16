// Array 
// let students = ["aman", "raj", "abhishek"];
// console.log(students);
// console.log(students[2]);

// Creating Array 
// let marks = [99, 85, 93, 76, 62]; // number array
// let names = ["adam", "bob", "ron"]; // string array
// let info = ["adam", 25, 6.2]; // mixed array

// // empty array 
// let newArray = [];

// Arrays are mutable
// let arr = ["mango", "banana", "apple"];
// arr[0] = "litchi";
// arr[0] = "pineapple";
// console.log(arr);

// Array methods
// 1. push method : Add to end. 
// let cars = ["xuv", "tata", "alto"];
// console.log("before", cars);
// cars.push("bugati")
// cars.push("maruti")
// cars.push("BMW")
// console.log("after" , cars);

// Pop method : delete from end and return it.
// let cars = ["xuv", "tata", "alto", "maruti", "BMW"];
// console.log(cars);
// let popValue = cars.pop();
// console.log(cars);
// console.log("Pop Value : ", popValue);

// Unshift method : add to start
// let cars = ["xuv", "tata", "alto"];
// console.log(cars);
// cars.unshift("toyota");
// console.log(cars);

// Shift method : delete from start and return it.
// let cars = ["xuv", "tata", "alto"];
// cars.shift();

// 1. Practice Qs 
// let  month = ["january", "july", "march", "august"];
// console.log(month);
// month[0] = "july";
// month[1] = "june";
// console.log(month);

// console.log("------------------------------------------------");

// // console.log(month);
// month.shift()
// month.shift()
// month.unshift("june")
// month.unshift("july")
// console.log(month);

// indexOf method : find index of something (case sensitve)
// let cars = ["xuv", "tata", "alto", "maruti", "BMW"];
// console.log(cars.indexOf("xuv")); // 0
// console.log(cars.indexOf("maruti")); // 3
// console.log(cars.indexOf("XUV")); // -1

// includes method : search for a value
// let cars = ["xuv", "tata", "alto", "maruti", "BMW"];
// cars.includes("xuv");
// console.log(cars);

// concat method : merge 2 array (concatenation)
// let primary = ["red", "blue", "green"];
// let secondary = ["orange", "yellow", "purple"];
// let allColour = primary.concat(secondary);
// console.log(allColour);

// console.log("---------------------------------------");

// allColour = secondary.concat(primary);
// console.log(allColour);

// reverse method : reverse an array.
// let primary = ["red", "blue", "green"];
// primary.reverse();
// console.log(primary);

// slice : copies a portion of an array. 
// let primary = ["red", "blue", "green", "yellow", "orange"];
// primary.slice(0, 4);
// primary.slice(-2);

// splice : removes / replaces / add elements 
// Splice(start, deleteCount, element1, element2);
// let primary = ["red", "blue", "green", "yellow", "orange"];
// primary.splice(1, 0, "yellow", "pink");

// sort : sorts an array.
// let abc = ['d', 'a', 'c', 'b'];
// abc.sort();

// 2. Practice Qs 
// let  month = ["january", "july", "march", "august"];
// month.splice(0, 2, "july", "june");

// 3. Practice Qs 
let lang = ['c', 'c++', 'html', 'javascript', 'python', 'java', 'c#', 'sql'];
console.log(lang.reverse().indexOf("javascript"));

// 4. Practice Qs 
let ticTacToe = [['X', null, 'O'], [null, 'X', null], ['O', null, 'X']]