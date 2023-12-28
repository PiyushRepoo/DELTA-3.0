// for(let i = 1; i <= 20; i++) {
//     console.log(i);
// }

// for(let i = 5; i >= 1; i--) {
//     console.log(i);
// }

// printing odd no from 1 to 15
// for (let i = 1; i <= 15; i = i + 2) {
//     console.log(i);
// }

// printing even no from 2 to 10
// for (let i = 2; i <= 10; i=i+2) {
//     console.log(i);
// }

// printing table
// let n = prompt("Enter Your No : ");
// n = parseInt(n);

// for(let i=n; i<=n*10; i = i+n){
//     console.log(i);
// }

// for(let i = 1; i<=3; i++){
//     console.log("outer", i);
//     for(let j = 1; j<=3; j++){
//         console.log(j);
//     }
// }


// print no from 0 to 20 using while loop 
// let i = 0;
// while (i<=20) {
//     console.log(i);
//     i++;
// }

// printing tables 
// let n = parseInt(prompt("Enter your no: "));

// let i = 1;
// while(i<=10){
//     console.log(`${n} * ${i} = ${i*n}`);
//     i++;
// }

// favorite movie 
// let favmovie = "iron man";

// let guess = prompt("Guess my favorite movie.");

// while(guess != favmovie){
//     if(guess == "quit"){
//         console.log("You quit.");
//         break;
//     }
//     guess = prompt("Wrong guess. Try again.");
// }

// if(guess == favmovie){
//     console.log("congrats!");
// }

// loops with arrays 

// let fruits = ["mango", "apple", "banana", "litchi", "orange"];
// fruits.unshift("pineapple")

// for(let i = 0; i<=fruits.length-1; i++){
//     console.log(i, fruits[i]);
// }

// loops with nested arrays 

// let heroes = [["ironman", "spiderman", "thor"], ["superman", "wonder woman", "flash"]];

// for(let i = 0; i<heroes.length; i++){
//     console.log(`List #${i}`);
//     for(let j = 0; j<heroes[i].length; j++){
//         console.log(`j=${j} , ${heroes[i] [j]}`);
//     }
// }

// let students = [["aman", 95], ["akshay", 89], ["shradha", 97]];

// for(let i = 0; i<students.length; i++){
//     console.log(`i = ${i}`);

//     for(let j = 0; j<students[i].length; j++){
//         console.log(students[i]);
//     }
// }