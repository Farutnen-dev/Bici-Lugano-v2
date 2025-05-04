// Datos de ejemplo para las bicicletas
const modelos = {
    bmx: [
        { marca: "Trek", modelo: "BMX Pro", precio: 550000, imagen: "https://fakeimg.pl/300x200/007bff/ffffff/?text=BMX+Trek" },
        { marca: "Giant", modelo: "BMX Elite", precio: 600000, imagen: "https://fakeimg.pl/300x200/007bff/ffffff/?text=BMX+Giant" },
        { marca: "Specialized", modelo: "BMX Expert", precio: 650000, imagen: "https://fakeimg.pl/300x200/007bff/ffffff/?text=BMX+Specialized" },
        // Agregar más modelos...
    ],
    electrica: [
        { marca: "Trek", modelo: "E-Bike City", precio: 1200000, imagen: "https://fakeimg.pl/300x200/007bff/ffffff/?text=Eléctrica+Trek" },
        { marca: "Giant", modelo: "E-Bike Urban", precio: 1300000, imagen: "https://fakeimg.pl/300x200/007bff/ffffff/?text=Eléctrica+Giant" },
        { marca: "Specialized", modelo: "E-Bike Pro", precio: 1400000, imagen: "https://fakeimg.pl/300x200/007bff/ffffff/?text=Eléctrica+Specialized" },
        // Agregar más modelos...
    ],
    plegable: [
        { marca: "Trek", modelo: "Fold Pro", precio: 600000, imagen: "https://fakeimg.pl/300x200/007bff/ffffff/?text=Plegable+Trek" },
        { marca: "Giant", modelo: "Fold Elite", precio: 650000, imagen: "https://fakeimg.pl/300x200/007bff/ffffff/?text=Plegable+Giant" },
        { marca: "Specialized", modelo: "Fold Expert", precio: 700000, imagen: "https://fakeimg.pl/300x200/007bff/ffffff/?text=Plegable+Specialized" },
        // Agregar más modelos...
    ],
    playera: [
        { marca: "Trek", modelo: "City Classic", precio: 250000, imagen: "https://fakeimg.pl/300x200/007bff/ffffff/?text=Playera+Trek" },
        { marca: "Giant", modelo: "City Pro", precio: 280000, imagen: "https://fakeimg.pl/300x200/007bff/ffffff/?text=Playera+Giant" },
        { marca: "Specialized", modelo: "City Elite", precio: 300000, imagen: "https://fakeimg.pl/300x200/007bff/ffffff/?text=Playera+Specialized" },
        // Agregar más modelos...
    ],
    "rodado-chico": [
        { marca: "Trek", modelo: "Kids Pro", precio: 100000, imagen: "https://fakeimg.pl/300x200/007bff/ffffff/?text=Rodado+Chico+Trek" },
        { marca: "Giant", modelo: "Kids Elite", precio: 120000, imagen: "https://fakeimg.pl/300x200/007bff/ffffff/?text=Rodado+Chico+Giant" },
        { marca: "Specialized", modelo: "Kids Expert", precio: 150000, imagen: "https://fakeimg.pl/300x200/007bff/ffffff/?text=Rodado+Chico+Specialized" },
        // Agregar más modelos...
    ],
    montana: [
        { marca: "Trek", modelo: "Mountain Pro", precio: 800000, imagen: "https://fakeimg.pl/300x200/007bff/ffffff/?text=Montaña+Trek" },
        { marca: "Giant", modelo: "Mountain Elite", precio: 900000, imagen: "https://fakeimg.pl/300x200/007bff/ffffff/?text=Montaña+Giant" },
        { marca: "Specialized", modelo: "Mountain Expert", precio: 1000000, imagen: "https://fakeimg.pl/300x200/007bff/ffffff/?text=Montaña+Specialized" },
        // Agregar más modelos...
    ]
};

// Títulos de las categorías
const titulosCategorias = {
    bmx: "Bicicletas BMX",
    electrica: "Bicicletas Eléctricas",
    plegable: "Bicicletas Plegables",
    playera: "Bicicletas Playeras",
    "rodado-chico": "Bicicletas de Rodado Chico",
    montana: "Bicicletas de Montaña"
};

// Obtener la categoría de la URL
const urlParams = new URLSearchParams(window.location.search);
const categoria = urlParams.get('categoria');

// Función para formatear el precio
function formatPrice(price) {
    return new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
        minimumFractionDigits: 0
    }).format(price);
}

// Función para crear el HTML de un modelo
function createModeloHTML(modelo) {
    return `
        <div class="modelo-card">
            <img src="${modelo.imagen}" alt="${modelo.marca} ${modelo.modelo}">
            <div class="modelo-info">
                <h3>${modelo.marca} ${modelo.modelo}</h3>
                <p class="precio">${formatPrice(modelo.precio)}</p>
                <button class="cta-button">Consultar</button>
            </div>
        </div>
    `;
}

// Función para actualizar la lista de modelos
function updateModelosList(modelosFiltrados) {
    const container = document.getElementById('modelos-container');
    container.innerHTML = modelosFiltrados.map(createModeloHTML).join('');
}

// Función para filtrar modelos
function filterModelos() {
    const marcaSeleccionada = document.getElementById('marca').value;
    const precioSeleccionado = document.getElementById('precio').value;
    
    let modelosFiltrados = modelos[categoria] || [];
    
    // Filtrar por marca
    if (marcaSeleccionada !== 'todas') {
        modelosFiltrados = modelosFiltrados.filter(modelo => modelo.marca === marcaSeleccionada);
    }
    
    // Filtrar por precio
    if (precioSeleccionado !== 'todos') {
        const [min, max] = precioSeleccionado.split('-').map(Number);
        if (max) {
            modelosFiltrados = modelosFiltrados.filter(modelo => 
                modelo.precio >= min && modelo.precio <= max
            );
        } else {
            modelosFiltrados = modelosFiltrados.filter(modelo => modelo.precio >= min);
        }
    }
    
    updateModelosList(modelosFiltrados);
}

// Inicializar la página
document.addEventListener('DOMContentLoaded', () => {
    // Actualizar título y breadcrumb
    document.getElementById('titulo-categoria').textContent = titulosCategorias[categoria] || 'Modelos Disponibles';
    document.getElementById('categoria-actual').textContent = titulosCategorias[categoria] || 'Categoría';
    
    // Obtener marcas únicas para el filtro
    const marcas = [...new Set(modelos[categoria]?.map(m => m.marca) || [])];
    const marcaSelect = document.getElementById('marca');
    marcas.forEach(marca => {
        const option = document.createElement('option');
        option.value = marca;
        option.textContent = marca;
        marcaSelect.appendChild(option);
    });
    
    // Agregar event listeners a los filtros
    document.getElementById('marca').addEventListener('change', filterModelos);
    document.getElementById('precio').addEventListener('change', filterModelos);
    
    // Mostrar modelos iniciales
    filterModelos();
}); 