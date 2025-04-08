const button_start = document.getElementById('start');
button_start.addEventListener('click', calculate);

function calculate() {
  const first_number = parseInt(document.querySelector('input[id=num1]').value);
  const second_number = parseInt(document.querySelector('input[id=num2]').value);
  const operation = document.getElementById('operation').value;
  console.log(operation);
  if (operation === 'add') document.getElementById(
      'result').innerHTML = first_number + second_number;
  else if (operation === 'sub') document.getElementById(
      'result').innerHTML = first_number - second_number;
  else if (operation === 'multi') document.getElementById(
      'result').innerHTML = first_number * second_number;
  else if (operation === 'div') document.getElementById(
      'result').innerHTML = first_number / second_number;

}