const button = document.getElementById('toggleButton');
let isDay = true;
button.addEventListener('click', function(){
    if (isDay) {
        document.body.style.backgroundColor = 'black';
        button.textContent = 'Night';
    } else {
        document.body.style.backgroundColor = 'white';
        button.textContent = 'Day';
    
    }
    
    
})