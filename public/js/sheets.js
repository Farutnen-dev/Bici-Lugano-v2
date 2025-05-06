// Configuración de la API de AppSheet
const APP_ID = 'usadRzBy6S43eGSOaru1U7';
const API_KEY = '9joyZ-WtrJU-cVV6Z-k2bTU-mbjcy-DJMyh-z5dNi-RvEMo'; // Reemplazar con tu API key de AppSheet

// Función para obtener datos de AppSheet
async function getAppSheetData(tableName) {
    try {
        console.log('Intentando obtener datos de AppSheet...');
        const response = await fetch(
            `https://api.appsheet.com/api/v2/apps/${APP_ID}/tables/${tableName}/Action?applicationAccessKey=${API_KEY}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    Action: 'Find',
                    Properties: {
                        Select: ['marca', 'modelo', 'categoria', 'precio', 'descripcion', 'imagen']
                    }
                })
            }
        );

        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }

        const data = await response.json();
        console.log('Datos obtenidos exitosamente:', data);
        return data;
    } catch (error) {
        console.error('Error al obtener datos de AppSheet:', error);
        console.error('Detalles del error:', {
            appId: APP_ID,
            tableName: tableName,
            errorMessage: error.message
        });
        return null;
    }
}

// Función para obtener productos por categoría
async function getProductsByCategory(category) {
    try {
        const response = await fetch('/api/productos');
        const productos = await response.json();
        
        return productos.filter(producto => 
            producto.categoria.toLowerCase() === category.toLowerCase()
        );
    } catch (error) {
        console.error('Error al obtener productos:', error);
        return [];
    }
}

// Función para obtener todas las marcas únicas
async function getUniqueBrands() {
    try {
        const response = await fetch('/api/productos');
        const productos = await response.json();
        
        const brands = new Set();
        productos.forEach(producto => brands.add(producto.marca));
        return Array.from(brands);
    } catch (error) {
        console.error('Error al obtener marcas:', error);
        return [];
    }
}

// Función para cargar productos en la galería
async function loadProducts() {
    try {
        const response = await fetch('/api/productos');
        const productos = await response.json();
        
        // Obtener los contenedores de galería
        const galleryContainers = document.querySelectorAll('.gallery-container');
        
        // Limpiar contenedores existentes
        galleryContainers.forEach(container => {
            container.innerHTML = '';
        });

        // Agrupar productos por categoría
        const productosPorCategoria = {
            destacados: productos.slice(0, 3),
            ofertas: productos.slice(3, 6)
        };

        // Llenar cada contenedor
        galleryContainers.forEach((container, index) => {
            const categoria = index === 0 ? 'destacados' : 'ofertas';
            const productosCategoria = productosPorCategoria[categoria];

            productosCategoria.forEach(producto => {
                const item = document.createElement('div');
                item.className = 'gallery-item';
                item.innerHTML = `
                    <img src="${producto.imagen}" alt="${producto.nombre}">
                    <h3>${producto.nombre}</h3>
                    <p>Desde $${producto.precio.toLocaleString()}</p>
                `;
                container.appendChild(item);
            });
        });
    } catch (error) {
        console.error('Error al cargar productos:', error);
    }
}

// Cargar productos cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', loadProducts);

// Exportar las funciones para uso en otros archivos
export { getProductsByCategory, getUniqueBrands, loadProducts }; 