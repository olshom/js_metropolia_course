const numbers = [];
while (true) {
  const num = parseInt(prompt('Enter the number:'));
  if (num===0) break
  else numbers.push(num)
}
for (let num of numbers.sort((a, b) => a - b).reverse()) {
  console.log(num)
}