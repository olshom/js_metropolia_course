function to_roll () {
  const roll = Math.floor(Math.random()*6+1);
  return roll;
}

let rolls = '';
while (true) {
  const roll = to_roll();
  if (roll === 6) {
    break;
  } else rolls += `<li>${roll}</li>`
}

document.querySelector('#rolls').innerHTML = (rolls)
