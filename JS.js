// 1. Select the elements from the HTML
const display = document.getElementById('display');
const button = document.getElementById('incrementBtn');

// 2. Set an initial starting number
let count = 0;

// 3. Listen for a click event
button.addEventListener('click', () => {
    count = count + 1; // Increase count
    display.innerText = count; // Update the text on the screen
});