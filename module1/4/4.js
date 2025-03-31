'use strict';
const name = prompt(`Enter the student's name`);
const class_num = Math.floor(Math.random() * 4) + 1;
let class_name = null
switch (class_num) {
  case 1:
    class_name = 'Gryffindor';
    break;
  case 2:
    class_name= 'Slytherin';
    break;
  case 3:
    class_name='Hufflepuff';
    break;
  case 4:
    class_name='Ravenclaw';
    break;
}


document.querySelector('#sorting').innerHTML =(`${name}, you are ${class_name}`)