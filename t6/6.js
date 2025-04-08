const button = document.querySelector('button');

function eventHandler(evt){
  alert('Button Clicked')
}

button.addEventListener('click', eventHandler)
