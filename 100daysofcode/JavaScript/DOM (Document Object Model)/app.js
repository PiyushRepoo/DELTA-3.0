/* DOM (Document Obect Model) : The dom represents the document with a logical tree. It allows us to manipulate/change webpage content (html elements). */

// Selecting elements 

// getElementById: Returns the element as an object or null(if not found).

// let  mainImg = document.getElementById("mainImg");
// console.dir(mainImg); // <img src="assets/spiderman_img.png id="mainImg">

// console.dir(mainImg.tagName); // P

// console.dir(mainImg.src); //'http://127.0.0.1:5500/assets/spiderman_img.png'

// mainImg.src = "assets/creation_2.jpeg";

// let  desc = document.getElementById("description");
// console.dir(desc); 
// console.dir(desc.tagName);
// console.dir(desc.id);

// let abc = document.getElementById("abc");
// console.dir(abc); // null



// getElementsByClassName : Returns the elements as an HTML collction or empty collection (if not found).    

// let ldImg = document.getElementsByClassName("oldImg");

// for(let i = 0; i<oldImg.length; i++){
//     console.dir(oldImg[i]);
// };


// getElementsByTagName : Returns the elements as an html collection or empty collection(if not found).

// let tag = document.getElementsByTagName("p");
// console.log(tag);



// QuerySelector : Allows us to use css selectors. It returns first element.

// let h4Tag = document.querySelector('h4');
// console.dir(h4Tag);

// let boxClass = document.querySelector('.bx');
// console.dir(boxClass);

// let IdmainImg = document.querySelector('#mainImg');
// console.dir(IdmainImg);



// QuerySelectorAll : 
// let name = document.querySelectorAll('.box a'); // returns nodeList collection
// console.dir(name)

// Manipuleting attribute
//  let img = document.querySelector('#mainImg');
// console.log(img.getAttribute('id')); // mainImg

// img.setAttribute('id', 'hi'); // id="hi"

// Manipulating styles 

// let h1 = document.querySelector('h1');

// h1.style.color = 'red'


// Manipulating styles using classList
// let img = document.querySelector('#mainImg');
// let heading = document.querySelector('h1');

// heading.addEventListener('click', () => {
//     heading.classList.toggle('heading');
// });
// heading.classList.add('abc')


// Adding elements

// let newP = document.createElement('p');
// let btn = document.createElement('button');
// newP.innerHTML = 'hi i am new paragraph';
// btn.innerText = "Click me!!"

// let p = document.querySelector('.p');

// p.append(newP)
// p.append(btn)
// p.prepend(btn)


// // Removing elements 
// p.removeChild(newP)

let para1 = document.createElement('p');
para1.innerText = "Hey i'm red!";
para1.classList.add('red');

let h3 = document.createElement('h3');
h3.classList.add('blue');
h3.innerText = "I'm blue h3!";

let div = document.createElement('div');
div.classList.add('divStyle');

document.querySelector('body').prepend(para1, h3, div);


let h1 = document.createElement('h1');
h1.innerText = "i'm in a div.";
div.append(h1);

let para2 = document.createElement('p');
para2.innerText = "ME TOO!"
div.append(para2)




