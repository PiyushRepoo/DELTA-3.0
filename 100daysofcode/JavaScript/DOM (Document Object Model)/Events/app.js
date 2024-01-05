// onclick
// let btn = document.querySelector("button");
// // let body = document.querySelector("body");
// // function sayHello() {
// //   let name = prompt("Enter your name please ");
// //   alert(`Hello ${name}!`);
// // }

// // btn.onclick = sayHello;

// form events

// form.addEventListener('submit', (event)=> {
//     event.preventDefault();
//     console.log("form submitted");
// });

// extracting form data

let form = document.querySelector("form");
let p = document.querySelector("p");
let username = document.querySelector("#username");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  // console.log(form);
});

username.addEventListener("input", function(){
  p.innerText = username.value; 
});
