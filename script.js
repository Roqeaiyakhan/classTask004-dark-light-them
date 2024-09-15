const button = document.getElementById('toggleButton');
const backgroundbody = document.getElementById("darkmode");
backgroundbody.style.backgroundColor = "white";
button.style.color = "black";
let isDay = true;

button.addEventListener('click', function() {
    if (backgroundbody.style.backgroundColor === "black") {
        backgroundbody.style.backgroundColor = 'white';
        button.textContent = 'Day';
    } else {
        backgroundbody.style.backgroundColor = 'black';
        button.textContent = 'Night';
    }
});

