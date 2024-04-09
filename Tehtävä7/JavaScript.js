'use strict'

const DiceAmount = parseInt(prompt('Give dice amount:'));

let totalSum = 0;

for (let i = 0; i < DiceAmount; i++ ) {
    const diceResult = Math.floor(Math.random() * 6) + 1;
    totalSum += diceResult
    console.log(`heitto: ${i +1} noppaluku: ${diceResult}`)

}
console.log(`total sum: ${totalSum}`)

const Paragraph = document.querySelectorAll('p')
Paragraph[0].textContent = (`Silmälukujen summa: ${totalSum}`);

Paragraph[1].textContent = ('check console ;D');