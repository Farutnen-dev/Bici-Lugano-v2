import { getProductsByCategory, getUniqueBrands } from './sheets.js';

// Obtener la categoría de la URL
const urlParams = new URLSearchParams(window.location.search);
const categoria = urlParams.get('categoria');

// Elementos del DOM
const categoriaActual = document.getElementById('categoria-actual');
const tituloCategoria = document.getElementById('titulo-categoria');
const marcaSelect = document.getElementById('marca');
const modelosContainer = document.getElementById('modelos-container');

// Actualizar el título y breadcrumb
categoriaActual.textContent = categoria.charAt(0).toUpperCase() + categoria.slice(1);
tituloCategoria.textContent = `Modelos ${categoriaActual.textContent}`;

// Cargar marcas en el select
async function cargarMarcas() {
    const marcas = await getUniqueBrands();
    marcas.forEach(marca => {
        const option = document.createElement('option');
        option.value = marca;
        option.textContent = marca;
        marcaSelect.appendChild(option);
    });
}

// Cargar productos
async function cargarProductos() {
    const productos = await getProductsByCategory(categoria);
    mostrarProductos(productos);
}

// Mostrar productos en el grid
function mostrarProductos(productos) {
    modelosContainer.innerHTML = '';
    
    productos.forEach(producto => {
        const productoCard = document.createElement('div');
        productoCard.className = 'modelo-card';
        productoCard.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.modelo}">
            <div class="modelo-info">
                <h3>${producto.marca} ${producto.modelo}</h3>
                <p class="precio">$${producto.precio.toLocaleString()}</p>
                <p>${producto.descripcion}</p>
                <button class="cta-button">Consultar</button>
            </div>
        `;
        modelosContainer.appendChild(productoCard);
    });
}

// Filtrar productos
async function filtrarProductos() {
    const marcaSeleccionada = marcaSelect.value;
    const precioSeleccionado = document.getElementById('precio').value;
    
    let productos = await getProductsByCategory(categoria);
    
    // Aplicar filtros
    if (marcaSeleccionada !== 'todas') {
        productos = productos.filter(p => p.marca === marcaSeleccionada);
    }
    
    if (precioSeleccionado !== 'todos') {
        const [min, max] = precioSeleccionado.split('-').map(Number);
        productos = productos.filter(p => {
            const precio = Number(p.precio);
            if (max) {
                return precio >= min && precio <= max;
            } else {
                return precio >= min;
            }
        });
    }
    
    mostrarProductos(productos);
}

// Event listeners
marcaSelect.addEventListener('change', filtrarProductos);
document.getElementById('precio').addEventListener('change', filtrarProductos);

// Inicializar
cargarMarcas();
cargarProductos(); 