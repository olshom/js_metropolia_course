const numbers = [];
while (true) {
  const num = parseInt(prompt('Enter a number: '));
  if (numbers.includes(num)) {
    break;
  } else {
    numbers.push(num);
  }
}
for (let num of numbers.sort((a, b) => a - b)) {
  console.log(num)
}