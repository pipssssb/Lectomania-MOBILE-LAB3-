const todosLosLibros = [

    // Nuevos ingresos
    
    {
        id: 1,
        titulo: 'Naci para esto',
        autor: 'Alice Oseman',
        precio: 22000,
        imagen: 'imagenes/libros/npe - ao1.png'
    },
    {
        id: 2,
        titulo: 'El problema de los 3 cuerpos',
        autor: 'Cixin Liu',
        precio: 27000,
        imagen: 'imagenes/libros/epdl3c - cl.jpg'
    },
    {
        id: 3,
        titulo: 'Dune',
        autor: 'Frank Herbert',
        precio: 28100,
        imagen: 'imagenes/libros/dune - fh.jpg'
    },
    {
        id: 4,
        titulo: 'Los juegos del hambre - Libro 4',
        autor: 'Suzanne Collins',
        precio: 26300,
        imagen: 'imagenes/libros/ljdhbdpcys - sc.jpg'
    },

     // Bestseller Argentina
     
    {
        id: 5,
        titulo: 'Heartless',
        autor: 'Marissa Meyer',
        precio: 19800,
        imagen: 'imagenes/libros/heartless - mm.jpg'
    },
    {
        id: 6,
        titulo: 'Alas de sangre',
        autor: 'Rebecca Yarros',
        precio: 26900,
        imagen: 'imagenes/libros/ads - ry.png'
    },
    {
        id: 7,
        titulo: 'Harry Potter y la piedra filosofal',
        autor: 'J. K. Rowling',
        precio: 52500,
        imagen: 'imagenes/libros/hpylpf - jkr.png'
    },
    {
        id: 8,
        titulo: 'Buenos presagios',
        autor: 'Terry Pratchett & Neill Gaiman',
        precio: 26300,
        imagen: 'imagenes/libros/bp - tp&ng.jpg'
    },

    //Juveniles

    {
        id: 9,
        titulo: 'Los Juegos del Hambre',
        autor: 'Suzanne Collins',
        precio: 26400,
        imagen: 'imagenes/libros/ljdh - sc.jpg'
    },
    {
        id: 10,
        titulo: 'Maze Runner: La Cura Mortal',
        autor: 'James Dashner',
        precio: 16500,
        imagen: 'imagenes/libros/mrlcm - jd.png'
    },
    {
        id: 11,
        titulo: 'Divergente',
        autor: 'Veronica Roth',
        precio: 26400,
        imagen: 'imagenes/libros/divergente - vr.jpg'
    },
    {
        id: 12,
        titulo: 'Cazadores de Sombras',
        autor: 'Cassandra Clare',
        precio: 23300,
        imagen: 'imagenes/libros/cdscdh - cc.png'
    },

    // Comics y novelas graficas
    
    {
        id: 13,
        titulo: 'Invincible compendium one',
        autor: 'Robert Kirkman',
        precio: 55400,
        imagen: 'imagenes/libros/ico - rk&.png'
    },
    
    {
        id: 14,
        titulo: 'Hellboy 1',
        autor: 'Mike Mignola',
        precio: 35100,
        imagen: 'imagenes/libros/hellboy - mm.jpg'
    },
    {
        id: 15,
        titulo: 'Gotham Central',
        autor: 'Greg Rucka',
        precio: 75600,
        imagen: 'imagenes/libros/gc - eb&gr.jpg'
    },
    {
        id: 16,
        titulo: 'Dragon Ball Super 12',
        autor: 'Akira Toriyama',
        precio: 5310,
        imagen: 'imagenes/libros/dbs12 - at.jpg'
    },

];

// function crearElementoLibro(libro) {
//     const div = document.createElement('div');
//     div.className = 'resultado-libro';
//     div.innerHTML = `
//         <img src="${libro.imagen}" alt="${libro.titulo}" style="width:121px;height:192px;">
//         <div class="libro-detalles">
//             <button class="producto-detalles-boton-agregar"
//                 data-id="${libro.id}"
//                 data-titulo="${libro.titulo}"
//                 data-precio="${libro.precio}"
//                 data-imagen="${libro.imagen}">
//                 Agregar al carrito
//             </button>
//             <a href="producto-detalles.html?id=${libro.id}">
//                 <p><span style="font-weight: bold">${libro.titulo}<br/>${libro.autor}<br/></span>$${libro.precio}</p>
//             </a>
//         </div>
//     `;
//     return div;
// }

// document.addEventListener('DOMContentLoaded', () => {
//     const botonesAgregarCarrito = document.querySelectorAll('.producto-detalles-boton-agregar');
    
//     botonesAgregarCarrito.forEach(boton => {
//         boton.addEventListener('click', () => {
//             const producto = {
//                 id: parseInt(boton.dataset.id),
//                 titulo: boton.dataset.titulo,
//                 precio: parseFloat(boton.dataset.precio),
//                 imagen: boton.dataset.imagen
//             };
//             agregarAlCarrito(producto);
//         });
//     });
// });

const libro = libros.find(libro => libro.id === libroId);  // Usamos find() para buscar el libro por id

if (libro) {
    document.querySelector('.producto-detalles-imagen').src = libro.imagen;
    document.querySelector('.producto-detalles-titulo h2').textContent = `${libro.titulo} - ${libro.autor}`;
    document.querySelector('.producto-detalles-precio h2').textContent = `$${libro.precio}`;  // Añadimos el símbolo $
    // Actualice aquí más detalles del libro en la página
} else {
    console.error('Libro no encontrado');  // Manejo de error si el libro no se encuentra
}

const botonAgregar = document.querySelector('.producto-detalles-boton-agregar');
if (botonAgregar) {
    botonAgregar.addEventListener('click', () => {
        agregarAlCarrito({
            id: libro.id,
            titulo: libro.titulo,
            precio: libro.precio,
            imagen: libro.imagen
        });
        actualizarContadorCarrito();
        alert('Producto agregado al carrito');
    });
}
