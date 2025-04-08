'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

const element = document.getElementById('target')

for (let i=0; i < students.length; i++) {
  const option = document.createElement('option')
  const name = document.createTextNode(students[i].name)
  option.value = students[i].id
  option.appendChild(name)
  element.appendChild(option)
}