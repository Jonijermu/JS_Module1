'use strict'

const name = prompt('Anna nimesi: ')

let House;

const number = Math.floor(Math.random() * 4) +1;
if (number === 1) {
     House = 'gryffindor';
} else if (number === 2) {
    House = 'Slytherin';
} else if (number === 3) {
    House = 'Ravenclaw';
} else if (number === 4) {
    House = 'Hufflepuff';
}
const Paragraph = document.querySelector('p')
console.log(Paragraph)
Paragraph.textContent = (` ${name} sinä olet ${House}`);