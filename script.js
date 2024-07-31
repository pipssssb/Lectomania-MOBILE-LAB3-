
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            console.log('Menú toggled');  // Para debugging
        });
    } else {
        console.log('Elementos del menú no encontrados');  // Para debugging
    }
});