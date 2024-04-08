'use strict';

// tehtävä 1
console.log("i'm printing to console!");

//tehtävä 2
const name = prompt('user name');
const firstParagraphElement= document.querySelector("p");
console.log(firstParagraphElement);
firstParagraphElement.textContent = 'Hello, ' + name;

// tehtävä3
let num1 = parseInt(prompt('Anna numero'));
let num2 = parseInt(prompt('anna toinen numero'));
let num3 = parseInt(prompt('anna kolmas numero'));
let sum = num1 + num2 + num3
let kerto = num1 * num2 * num3
let average = sum/3

const AllParagraphElements = document.querySelectorAll("p");
console.log(AllParagraphElements);
AllParagraphElements[2].textContent = (`summa on: ${sum}`);
AllParagraphElements[3].textContent = (`kertolasku on: ${kerto}`);
AllParagraphElements[4].textContent = (`keskiarvo on: ${average}`);

