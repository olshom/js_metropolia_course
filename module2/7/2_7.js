function to_roll (sides) {
   return Math.floor(Math.random()*sides+1);
}

const sides = parseInt(prompt('Enter the number of sides:'))
let rolls = '';
while (true) {
  const roll = to_roll(sides);
  if (roll === sides) {
    break;
  } else rolls += `<li>${roll}</li>`
}

document.querySelector('#rolls').innerHTML = (rolls)
