// Creating post
// const post = {
//     username: "@piyushkumar",
//     content: "This is my #firstPost",
//     likes: 150,
//     tags: ["@apnacollege", "@delta3.0"]
// };

// Get value of object
// console.log(post.username);
// console.log(post["content"]);

// Add/Update value in object
// const student = {
//     name: "Piyush",
//     marks: 74,
//     age: 19,
//     city: "Delhi"
// };

// student.city = "Mumbai"
// student.marks = "A"
// student.gender = "female"

// to delete a property
// delete student.gender

// Nested Object
// const classInfo = {
//     aman: {
//         grade: "A+",
//         city: "delhi"
//     },

//     piyush: {
//         grade: "A",
//         city: "Rohtas"
//     }
// };

// Array of object
// const classInfo = [
//     {
//         name: "Aman",
//         city: "delhi"
//     },

//     {
//         name: "Piyush",
//         city: "Rohtas"
//     }
// ];

// Guessing Game

// let btn = document.querySelector(".btn");

// btn.addEventListener("click", function game() {
//   const max = prompt("Enter your max number you want to generate");

//   const random = Math.floor(Math.random() * max) + 1;

//   let guess = prompt("Guess the right number");

//   while (true) {
//     if (guess == "quit") {
//       console.log("You Quit");
//       break;
//     }

//     if(guess == NaN){
//         break;
//     }

//     if (guess == random) {
//       console.log(`Congrats!! You guessed right, random number was ${random}`);
//       break;
//     } else if (guess < random) {
//       guess = prompt(
//         "hint : Your number is to small, please try to guess larger number."
//       );
//     } else {
//       guess = prompt(
//         "hint : Your number is too large, please try to guess smaller number."
//       );
//     }
//   }
// });

