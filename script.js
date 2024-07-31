document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function() {
            console.log('Menu toggle clicked');
            mobileMenu.classList.toggle('active');
            console.log('Menú toggled');
            console.log('Menu active:', mobileMenu.classList.contains('active')); // Nuevo log
        });
    } else {
        console.log('Elementos del menú no encontrados');
    }
});