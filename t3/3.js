'use strict';
const names = ['John', 'Paul', 'Jones'];

const list = document.getElementById('target')

for (let i=0; i<names.length; i++) {
  const item = document.createElement('li')
  const text = document.createTextNode(names[i])
  item.appendChild(text)
  list.appendChild(item)
}