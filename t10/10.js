const form = document.querySelector('form');
form.addEventListener('submit', handle_query);

function handle_query(evt) {
  const first_name = document.querySelector('input[name=firstname]').value;
  const last_name = document.querySelector('input[name=lastname]').value;
  evt.preventDefault();
  console.log(first_name, last_name);
  document.getElementById(
      'target').innerHTML = `Your name is ${first_name} ${last_name}`;
}