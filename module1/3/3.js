'use strict';
const first = parseInt(prompt('Enter the first number'));
const second = parseInt(prompt('Enter the second number'));
const third = parseInt(prompt('Enter the third number'));

const sum = first + second + third
const product = first * second * third
const average = sum/3

document.querySelector('#first').innerHTML = `The first number is ${first}`;
document.querySelector('#second').innerHTML = `The second number is ${second}`;
document.querySelector('#third').innerHTML = `The third number is ${third}`;

document.querySelector('#summa').innerHTML = `The sum of numbers is ${sum}`;
document.querySelector('#product').innerHTML = `The product of numbers is ${product}`;
document.querySelector('#average').innerHTML = `The average of numbers is ${average}`;
