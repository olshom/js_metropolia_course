'use strict';
const year = parseInt(prompt('Enter a year: '))
let result = 'not a leap year'
if (year%100 === 0) {
  if (year%400 === 0) {
    result = 'a leap year';
  }
} else if (year%4 === 0) {
  result = 'a leap year';
}

document.querySelector('#year').innerHTML = `${year} is ${result}`;