const start_b = document.getElementById('start');
start_b.addEventListener('click', calculate);

function calculate() {
  const expression = document.querySelector('input[id=calculation]').value;
  const result_e = document.getElementById('result');

  if (expression.includes('+')) {
    const numbers = expression.split('+');
    result.innerHTML = expression + '=' + parseInt(numbers[0]) +
        parseInt(numbers[1]);
    document.querySelector('input[id=calculation]').value = '';
  } else if (expression.includes('-')) {
    const numbers = expression.split('-');
    result.innerHTML = expression + '=' + parseInt(numbers[0]) -
        parseInt(numbers[1]);
    document.querySelector('input[id=calculation]').value = '';

  } else if (expression.includes('*')) {
    const numbers = expression.split('*');
    result.innerHTML = expression + '=' + parseInt(numbers[0]) *
        parseInt(numbers[1]);
    document.querySelector('input[id=calculation]').value = '';

  } else if (expression.includes('/')) {
    const numbers = expression.split('/');
    result.innerHTML = expression + '=' + parseInt(numbers[0]) /
        parseInt(numbers[1]);
    document.querySelector('input[id=calculation]').value = '';

  }
}