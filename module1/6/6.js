'use strict';
const answer = confirm('Should I calculate the square root?');
console.log(answer)

if (answer) {
  const num = parseInt(prompt('Enter a number to calculate its square root: '))
  if (num >= 0) {
    document.querySelector('#result').innerHTML = `The square root is ${Math.sqrt(num)}`;
  } else {
    document.querySelector('#result').innerHTML = `The square root of a negative number is not defined`;
  }
} else {
  document.querySelector('#result').innerHTML = `The square root is not calculated.`;
}