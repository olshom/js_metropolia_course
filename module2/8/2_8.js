function concat (list) {
  let result = ''
  for (let e of list) result += e
  return result
}

document.querySelector('#result').innerHTML = (concat(['Johnny', 'DeeDee', 'Joey', 'Marky']))