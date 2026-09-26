const RANDOM_HEADING = [
    "Hello world!",
    "Touch some grass",
    "Beep Beep Boop Boop"
]

const heading = document.getElementById("heading");

heading.textContent = RANDOM_HEADING[Math.floor(Math.random() * RANDOM_HEADING.length)];

document.body.style.backgroundColor = "#ff5733";
