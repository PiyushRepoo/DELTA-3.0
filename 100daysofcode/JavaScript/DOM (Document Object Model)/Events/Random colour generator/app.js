// Activity

let h1 = document.querySelector("h1");
let rgb = document.querySelector(".rgbVal");
let btn = document.querySelector("#generate");
let para = document.querySelector("#para");
let colorBox = document.querySelector(".colorBox");

const random = function() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red}, ${green}, ${blue})`
    return color;
}

btn.addEventListener("click", function(){
    let randColor = random();
    colorBox.style.backgroundColor = randColor;
    rgb.innerHTML = randColor;
    h1.style.color = randColor;
    para.innerText = "This is your new color."
});

