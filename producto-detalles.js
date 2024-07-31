document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const libroId = urlParams.get('id');

    if (libroId) {
        const libro = todosLosLibros.find(l => l.id === parseInt(libroId));
        if (libro) {
            actualizarDetallesProducto(libro);
        }
    }
});

function actualizarDetallesProducto(libro) {
    document.querySelector('.producto-detalles-imagen').src = libro.imagen;
    document.querySelector('.producto-detalles-titulo').textContent = `${libro.titulo} - ${libro.autor}`;
    document.querySelector('.producto-detalles-precio').textContent = `$${libro.precio}`;
    // Actualiza más detalles según sea necesario
}