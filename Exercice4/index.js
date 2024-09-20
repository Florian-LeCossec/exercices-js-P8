const button = document.getElementById('myButton');
const message = document.getElementById('message');

button.addEventListener('click', () => {
    message.textContent = 'Bonjour, vous avez cliqué sur le bouton !';
});