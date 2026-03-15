const btn = document.querySelector('#btn')
const joke = document.querySelector('#joke')

btn.addEventListener('click', function(){

fetch('https://official-joke-api.appspot.com/random_joke')

.then(response => response.json())

.then(data => {
    joke.innerText = data.setup + " - " + data.punchline
})

})