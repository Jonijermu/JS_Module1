'use strict'

const DiceAmount = parseInt(prompt('Give dice amount:'));
const DiceThrows = parseInt(prompt('how many times the dice will be thrown: '));

const Number = Math.floor(Math.random() * 6) +1;

let sum;

sum = DiceAmount * DiceThrows * Number

