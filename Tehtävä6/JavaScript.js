'use strict'

let root = confirm('Should I calculate the square root?');
let vastaus

if (root == true) {
    const number = parseFloat(prompt('Anna numero: '));
    if (number < 0) {
        vastaus = 'The square root of a negative number is not defined';
    } else if (number > 0 ) {
        vastaus = Math.sqrt(number)
    }
}else if (root == false) {
     vastaus = 'The square root is not calculated';
}

const Paragraph = document.querySelector('p')
console.log(Paragraph)
Paragraph.textContent = (` ${vastaus}`);
