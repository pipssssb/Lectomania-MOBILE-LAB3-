document.addEventListener('DOMContentLoaded', function() {
    initializeMenuHamburguesa();
    initializeSearch();
    initializeCarritoCounter();
});

function initializeMenuHamburguesa() {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => mobileMenu.classList.toggle('active'));

        document.addEventListener('click', (event) => {
            if (!mobileMenu.contains(event.target) && !menuToggle.contains(event.target)) {
                mobileMenu.classList.remove('active');
            }
        });

        const mobileMenuLinks = mobileMenu.querySelectorAll('a');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', () => mobileMenu.classList.remove('active'));
        });
    }
}

function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.querySelector('.boton-buscador');
    const resultadosDiv = document.getElementById('resultadosBusqueda');

    if (searchInput && searchButton && resultadosDiv) {
        searchInput.addEventListener('keyup', (event) => {
            if (event.key === 'Enter') buscarLibro();
        });
        searchButton.addEventListener('click', buscarLibro);
    }
}

function buscarLibro() {
    // ... (código de búsqueda)
}

function actualizarContadorCarrito() {
    console.log('Actualizando contador del carrito');
    const contadorElements = document.querySelectorAll('.carrito-contador');
    const totalItems = carrito.reduce((total, item) => total + item.cantidad, 0);
    
    contadorElements.forEach(contadorElement => {
        contadorElement.textContent = totalItems > 0 ? totalItems : '';
        contadorElement.style.display = totalItems > 0 ? 'inline' : 'none';
    });
}

function initializeCarritoCounter() {
    if (typeof actualizarContadorCarrito === 'function') {
        actualizarContadorCarrito();
    }
}