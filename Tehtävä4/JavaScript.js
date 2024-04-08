'use strict'

const name = prompt('Anna nimesi: ')

let House;

const number = Math.floor(Math.random() * 4) +1;
if (number % 4 == 0) {
     House = 'gryffindor';
} else if (number % 3 == 0) {
    House = 'Slytherin';
} else if (number % 2 == 0) {
    House = 'Ravenclaw';
} else if (number % 1 == 0) {
    House = 'Hufflepuff';
}
const Paragraph = document.querySelector('p')
console.log(Paragraph)
Paragraph.textContent = (` ${name} sinä olet ${House}`);