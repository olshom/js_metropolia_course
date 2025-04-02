const dogs = [];
for (i=1; i<7; i++) {
  const dog_name = prompt('Enter the dog name:');
  dogs.push(dog_name)
}
const reverse_dogs = dogs.sort().reverse()
let list = ''
for (let dog of reverse_dogs) {
  list += `<li>${dog}</li>`
}
document.querySelector('#dogs').innerHTML = (list)
