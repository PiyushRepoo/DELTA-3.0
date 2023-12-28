// Qs1.

// let arr = [1,5,7,3,9,10,15];

// function filter(arr, n) {
//     for(let i = 0; i<arr.length; i++){
//         if(arr[i] > n){
//             console.log(arr[i]);
//         }
//     }
// }

// filter(arr, 5);

// Qs2.
// output => "abcdefgh"
// let str = "abcdabcdefgggh";

// let filterChar = function(str) {
//   let uniqueChar = "";
//     for (let i = 0; i < str.length; i++) {
//     if (!uniqueChar.includes(str[i])) {
//       uniqueChar += str[i];
//     }
//   }
//   return uniqueChar;
// };

// Qs3.
// // output => "United States of America"
// let country = ["Australia", "Germany", "United States of America"];

// let largestName = function (country) {
//   let largest = "";
//   for (let i = 0; i < country.length; i++) {
//     if (largest.length < country[i].length) {
//       largest = country[i];
//     }
//   }

//   return largest;
// };

// console.log(largestName(country));

// Qs4.

// let str = "abcgiwgeomnu";

// function vowelCount(str) {
//   let vowel = ["a", "e", "i", "o", "u"];
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (vowel.includes(str[i])) {
//       count++;
//     }
//   }

//   return count;
// }

// 2nd approach
// let str = "abcgiwgeomnu";

// function vowelCount(str) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (
//       str.charAt(i) == 'a' ||
//       str.charAt(i) == 'e' ||
//       str.charAt(i) == 'i' ||
//       str.charAt(i) == 'o' ||
//       str.charAt(i) == 'u'
//     ) {
//       count++;
//     }
//   }

//   return count;
// }

// Qs5.


// function generateRandomIntegers(start, end){
//   let diff = end - start;
//   let random = Math.floor( Math.random() * diff ) + start;
//   return random;
// }