const hamburger = document.getElementById('hamburger');
const navList = document.querySelector('.nav-list');

hamburger.addEventListener('click', () => {
    navList.classList.toggle('active');
});




// script.js

document.getElementById('ver-mas').addEventListener('click', function() {
    const hiddenItems = document.querySelectorAll('.app-item.hidden');
    hiddenItems.forEach(item => {
        item.classList.toggle('hidden');
    });
    
    // Cambiar el texto del botón
    if (this.innerText === 'Ver más') {
        this.innerText = 'Ver menos';
    } else {
        this.innerText = 'Ver más';
    }
});


