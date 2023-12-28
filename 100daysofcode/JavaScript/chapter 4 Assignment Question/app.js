// Qs1. Write a JS program to delete all occurrences of element ‘num’ in a given array.

// let arr = [1, 2, 3, 4, 5, 6, 2, 3];
// let num = 3;

// for(let i = 0; i<arr.length; i++){
//     if(arr[i] == num) {
//         arr.splice(i,1);
//     }
// }
// console.log(arr);


//Qs2. Write a JS program to find the no of digits in a number.

let num = 287152;
let counter = 0;

while (num != 0) {
    num = Math.floor(num/10);
    counter++;
}

console.log(`There are ${counter} digits in your number.`);


// Qs3. Write a JS program to find the sum of digits in a number.

// let num = parseInt(prompt("Enter the number:"));
// let sum = 0;
// let remainder = 0;

// while (num != 0) {
//     remainder = num%10;
//     sum = sum + remainder;
//     num = Math.floor(num/10);
// }

// console.log("Sum = ", sum);


// Qs4. Print the factorial of a number n.
// let num = 7;
// let fact = 1;

// for(let i = 1; i <= num; i++){
//     fact = fact * i;
// }

// console.log(`Factorial of ${num} is ${fact}`);Findthelargestnumberinanarraywithonlypositivenumbers


// Qs5. Find the largest number in an array with only positive numbers.
 
// let arr = [250, 25, 154, 12, 54];
// let largest = 0;

// for(let i = 0; i<arr.length; i++){
//     if(largest < arr[i]){
//         largest = arr[i];
//     }
// }

// console.log(`${largest} is largest number in your array.`);   
