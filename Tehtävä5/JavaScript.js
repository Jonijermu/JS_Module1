'use strict'

const number = prompt('Anna numero: ')

let LeapYear

if ((number % 4 == 0 && number % 100 != 0) || number % 400 == 0) {
    LeapYear = 'on karkausvuosi';
}
else {
    LeapYear = 'ei ole karkausvuosi';
}

const Paragraph = document.querySelector('p')
console.log(Paragraph)
Paragraph.textContent = (`Syöttämäsi vuosi ${LeapYear}`);
