'use strict'

const DiceAmount = parseInt(prompt('Give dice amount:'));
const DiceThrows = parseInt(prompt('how many times the dice will be thrown: '));

let totalSum = 0;

for (let i = 0; i < DiceThrows; i++ ) {
    let rollSum = 0;
    for (let j = 0; j < DiceAmount; j++) {
        const roll = Math.floor(Math.random() * 6) +1;
        rollSum += roll;
    }
    totalSum += rollSum;
}

console.log(`total sum: ${totalSum}`)
