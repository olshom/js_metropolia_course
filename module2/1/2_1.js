const numbers = [];
const reverse_numbers = [];
while (numbers.length<5) {
  const num = parseInt(prompt('enter the number: '));
  numbers.push(num);
}
while (numbers.length>0) {
  reverse_numbers.push(numbers.pop())
}

for(let num of reverse_numbers) {
  console.log(num)
}
