document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function(event) {
            event.stopPropagation(); // Previene que el evento se propague al documento
            mobileMenu.classList.toggle('active');
            console.log('Menu toggled');
            console.log('Menu active:', mobileMenu.classList.contains('active'));
        });
    } else {
        console.log('Elementos del menú no encontrados');
    }

    // Event listener para cerrar el menú cuando se hace clic fuera
    document.addEventListener('click', function(event) {
        if (mobileMenu && menuToggle) {
            if (!mobileMenu.contains(event.target) && event.target !== menuToggle) {
                mobileMenu.classList.remove('active');
                restaurarVistaOriginal();
            }
        }
    });

    // Event listener para la tecla "Enter" en el campo de búsqueda
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                buscarLibro();
            }
        });
    }
});
/*buscador*/
function crearElementoLibro(libro) {
    return `
        <div class="libro">
            <img src="${libro.imagen}" alt="${libro.titulo}" style="width:100%;max-width:121px;height:auto;">
            <div class="libro-detalles">
                <a href="producto-detalles.html?id=${libro.id}">
                    <p><strong>${libro.titulo}</strong><br>${libro.autor}<br>$${libro.precio}</p>
                </a>
            </div>
        </div>
    `;
}
function buscarLibro() {
    const searchInput = document.getElementById('searchInput');
    const resultadosBusqueda = document.getElementById('resultadosBusqueda');
    const seccionesOriginales = document.querySelectorAll('.section');
    
    if (!searchInput || !resultadosBusqueda) {
        console.error('Elementos de búsqueda no encontrados');
        return;
    }

    const searchTerm = searchInput.value.toLowerCase();

    if (!todosLosLibros || !Array.isArray(todosLosLibros)) {
        console.error('todosLosLibros no está definido o no es un array');
        return;
    }

    const resultados = todosLosLibros.filter(libro => 
        libro.titulo.toLowerCase().includes(searchTerm) || 
        libro.autor.toLowerCase().includes(searchTerm)
    );

    // Ocultar secciones originales
    seccionesOriginales.forEach(seccion => seccion.style.display = 'none');

    // Limpiar y mostrar resultados
    resultadosBusqueda.innerHTML = '';
    if (resultados.length > 0) {
        resultados.forEach(libro => {
            resultadosBusqueda.innerHTML += crearElementoLibro(libro);
        });
    } else {
        resultadosBusqueda.innerHTML = '<p>No se encontraron resultados.</p>';
    }

    // Mostrar el div de resultados
    resultadosBusqueda.style.display = 'block';
}
function restaurarVistaOriginal() {
    const resultadosBusqueda = document.getElementById('resultadosBusqueda');
    const seccionesOriginales = document.querySelectorAll('.section');
    const searchInput = document.getElementById('searchInput');

    // Ocultar resultados de búsqueda
    if (resultadosBusqueda) {
        resultadosBusqueda.style.display = 'none';
        resultadosBusqueda.innerHTML = '';
    }

    // Mostrar secciones originales
    seccionesOriginales.forEach(seccion => seccion.style.display = 'block');

    // Limpiar el campo de búsqueda
    if (searchInput) {
        searchInput.value = '';
    }
}

