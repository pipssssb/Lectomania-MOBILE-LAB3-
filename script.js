// script.js

document.addEventListener('DOMContentLoaded', function() {
    if (typeof actualizarCarrito === 'function') {
        actualizarCarrito();
    }
    if (typeof actualizarContadorCarrito === 'function') {
        actualizarContadorCarrito();
    }

    // Eventos del carrito
    if (carritoProductos) {
        carritoProductos.addEventListener('click', e => {
            if (e.target.closest('.carrito-producto-eliminar')) {
                const id = parseInt(e.target.closest('.carrito-producto-eliminar').dataset.id);
                eliminarDelCarrito(id);
            } else if (e.target.classList.contains('cantidad-btn')) {
                const id = parseInt(e.target.dataset.id);
                const cambio = e.target.classList.contains('mas') ? 1 : -1;
                cambiarCantidad(id, cambio);
            }
        });
    }

    if (vaciarCarritoBtn) {
        vaciarCarritoBtn.addEventListener('click', () => {
            carrito = [];
            guardarCarrito();
            actualizarCarrito();
        });
    }
    initializeCarrito();
});

function initializeCarrito() {
    const carritoProductos = document.querySelector('.carrito-productos');
    const vaciarCarritoBtn = document.querySelector('.carrito-acciones-vaciar');

    if (typeof actualizarCarrito === 'function') {
        actualizarCarrito();
    }

    if (carritoProductos) {
        carritoProductos.addEventListener('click', e => {
            if (e.target.closest('.carrito-producto-eliminar')) {
                const id = parseInt(e.target.closest('.carrito-producto-eliminar').dataset.id);
                eliminarDelCarrito(id);
            } else if (e.target.classList.contains('cantidad-btn')) {
                const id = parseInt(e.target.dataset.id);
                const cambio = e.target.classList.contains('mas') ? 1 : -1;
                cambiarCantidad(id, cambio);
            }
        });
    }

    if (vaciarCarritoBtn) {
        vaciarCarritoBtn.addEventListener('click', () => {
            carrito = [];
            guardarCarrito();
            actualizarCarrito();
        });
    }
}
