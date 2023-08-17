// Jokes.js

const jokeElement = document.getElementById('joke');
const btn = document.getElementById('btn');

btn.addEventListener('click', getJoke);

function getJoke() {
    fetch('https://dad-jokes.p.rapidapi.com/random/joke', {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com',
            'X-RapidAPI-Key': 'bd9e6891f6mshe35f45252f224a0p1b73cfjsn868c77ae6a5b'
        }
    })
    .then(response => response.json())
    .then(data => {
        jokeElement.textContent = data.body[0].setup + ' ' + data.body[0].punchline;
    })
    .catch(error => {
        console.error('Error fetching joke:', error);
        jokeElement.textContent = 'Error fetching joke. Please try again later.';
    });
}
