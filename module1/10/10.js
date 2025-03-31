'use strict';
const times = 1000
const dices = parseInt(prompt('Enter the number of dice: '))
const sum = parseInt(prompt('Enter the sum of the eye numbers: '))

let quantity_of_needed_sum = 0

for (let i= 1; i <=times; i++) {
  let sum_of_numbers = 0
  console.log('time',i)
  for (let j = 1; j <= dices; j++) {
    const roll_the_dice = Math.floor(Math.random()*6)+1
    sum_of_numbers += roll_the_dice
    console.log('rolling',j, roll_the_dice)
  }
  if (sum_of_numbers === sum) {
    quantity_of_needed_sum += 1
        console.log('quantity_of_needed_sum', quantity_of_needed_sum)
  }
}
const result =quantity_of_needed_sum/times*100
document.querySelector('#result').innerHTML = `Probability to get sum ${sum} with ${dices} dice is ${result.toFixed(2)}%`;