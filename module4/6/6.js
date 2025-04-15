'use strict';

const results = document.querySelector('#results');

const form = document.querySelector('#joke');
form.addEventListener('submit', async function (evt) {
  // ... prevent the default action.
  evt.preventDefault();
  // get value of input element
  const query = document.querySelector('input[name=q]').value;
  try {
    // error handling: try/catch/finally
    const response = await fetch(
      `https://api.chucknorris.io/jokes/search?query=${query}`,
    ); // starting data download, fetch returns a promise which contains an object of type 'response'
    const jsonData = await response.json();
    console.log(jsonData);

    results.innerHTML = '';
    for (const joke of jsonData.result) {
      const p = document.createElement('p');
      p.innerText = joke.value;
      const article = document.createElement('article');
      article.append(p);
      results.append(article);
    }
  } catch (error) {
    console.log(error.message);
  }
});
