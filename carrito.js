// Función para cargar los items del carrito
function cargarCarrito() {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const carritoContenido = document.getElementById('carrito-contenido');
    const totalAmount = document.getElementById('total-amount');
    let total = 0;

    carritoContenido.innerHTML = '';

    carrito.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('carrito-item');
        itemElement.innerHTML = `
            <img src="${item.imagen}" alt="${item.titulo}" width="50">
            <h3>${item.titulo}</h3>
            <p>Precio: $${item.precio}</p>
            <button onclick="eliminarDelCarrito(${item.id})">Eliminar</button>
        `;
        carritoContenido.appendChild(itemElement);
        total += item.precio;
    });

    totalAmount.textContent = total.toFixed(2);
}

// Función para eliminar un item del carrito
function eliminarDelCarrito(id) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito = carrito.filter(item => item.id !== id);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    cargarCarrito();
}

// Función para proceder al pago
document.getElementById('checkout-button').addEventListener('click', function() {
    alert('Procediendo al pago...');
    // Aquí iría la lógica para procesar el pago
});

// Cargar el carrito al iniciar la página
document.addEventListener('DOMContentLoaded', cargarCarrito);