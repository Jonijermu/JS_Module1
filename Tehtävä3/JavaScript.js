'use strict'

let num1 = parseInt(prompt('Anna numero'));
let num2 = parseInt(prompt('anna toinen numero'));
let num3 = parseInt(prompt('anna kolmas numero'));
let sum = num1 + num2 + num3
let kerto = num1 * num2 * num3
let average = sum/3

const AllParagraphElements = document.querySelectorAll("p");
console.log(AllParagraphElements);
AllParagraphElements[0].textContent = (`summa on: ${sum}`);
AllParagraphElements[1].textContent = (`kertolasku on: ${kerto}`);
AllParagraphElements[2].textContent = (`keskiarvo on: ${average}`);