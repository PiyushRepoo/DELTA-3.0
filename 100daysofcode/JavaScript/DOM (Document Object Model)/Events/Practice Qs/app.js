// Qs2.

// const btn = document.createElement('button');
// btn.innerText = "Click Me!";
// document.querySelector('body').prepend(btn);

// btn.addEventListener('click', function(){
//     btn.style.backgroundColor = "green";
//     btn.style.color = "white";
// });



// Qs3.

function updateValue() {
  let inp = document.querySelector("#userInp");
  let h3 = document.querySelector("h3");

  let sanitizedInput = inp.value.replace(/[^a-zA-Z ]/g, "");
  h3.textContent = sanitizedInput;
};
