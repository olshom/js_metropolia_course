function even (list) {
  const new_array = [];
  for (let e of list){
    if (e%2 === 0) new_array.push(e);
  }
  return new_array;
}

const array = [2, 7, 4]
const new_array = even(array)
console.log('The original array is', array)
console.log('The new array is', new_array)