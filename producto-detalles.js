// Función para mostrar los productos
function mostrarProductos(productos) {
    const productosGrid = document.getElementById('productos-grid');
    productosGrid.innerHTML = '';

    productos.forEach(producto => {
        const productoElement = document.createElement('div');
        productoElement.classList.add('libro');
        productoElement.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.titulo}">
            <div class="libro-detalles">
                <h3>${producto.titulo}</h3>
                <p>${producto.autor}</p>
                <p>$${producto.precio}</p>
                <button onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
            </div>
        `;
        productosGrid.appendChild(productoElement);
    });
}

// Función para agregar un producto al carrito
function agregarAlCarrito(id) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const producto = todosLosLibros.find(libro => libro.id === id);
    
    if (producto) {
        carrito.push(producto);
        localStorage.setItem('carrito', JSON.stringify(carrito));
        alert('Producto agregado al carrito');
    }
}

// Función para filtrar productos por categoría
function filtrarProductos() {
    const categoria = document.getElementById('categoria-select').value;
    let productosFiltrados = todosLosLibros;

    if (categoria) {
        productosFiltrados = todosLosLibros.filter(libro => libro.categoria === categoria);
    }

    mostrarProductos(productosFiltrados);
}

// Event listener para el cambio de categoría
document.getElementById('categoria-select').addEventListener('change', filtrarProductos);

// Cargar todos los productos al iniciar la página
document.addEventListener('DOMContentLoaded', () => mostrarProductos(todosLosLibros));