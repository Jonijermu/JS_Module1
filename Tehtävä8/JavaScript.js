'use strict'

//Write a program that prompts the user for the start and end year.
// The program prints all leap years from the interval given by the user.
// Printing is done in an unordered list to the HTML document

const startYear = parseInt(prompt('Aloitus vuosi'));
const endYear = parseInt(prompt('Vuosi mihin päättyy'));

const leapYears = [];

for (let i = startYear; i <= endYear; i++) {
    if ((i % 4 == 0 && i % 100 != 0) || (i % 400 == 0)) {
        console.log(i);
    leapYears.push(i);
    }
}

const ulElement = document.createElement('ul');

leapYears.forEach(year => {
    const liElement = document.createElement('li');
    liElement.textContent = year;
    ulElement.appendChild(liElement);
});

document.body.appendChild(ulElement);