'use strict'

//tehtävä 2
const name = prompt('user name');
const firstParagraphElement= document.querySelector("p");
console.log(firstParagraphElement);
firstParagraphElement.textContent = 'Tervetulloo, ' + name;