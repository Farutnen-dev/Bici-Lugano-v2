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
    console.log('Buscando productos para categoría:', category);
    const data = await getAppSheetData('Productos');
    
    if (!data) {
        console.error('No se pudieron obtener datos de productos');
        return [];
    }

    const filteredProducts = data
        .filter(producto => producto.categoria.toLowerCase() === category.toLowerCase())
        .map(producto => ({
            marca: producto.marca,
            modelo: producto.modelo,
            categoria: producto.categoria,
            precio: Number(producto.precio),
            descripcion: producto.descripcion,
            imagen: producto.imagen
        }));

    console.log('Productos filtrados:', filteredProducts);
    return filteredProducts;
}

// Función para obtener todas las marcas únicas
async function getUniqueBrands() {
    console.log('Obteniendo marcas únicas...');
    const data = await getAppSheetData('Productos');
    
    if (!data) {
        console.error('No se pudieron obtener datos para las marcas');
        return [];
    }

    const brands = new Set();
    data.forEach(producto => brands.add(producto.marca));
    const uniqueBrands = Array.from(brands);
    console.log('Marcas únicas encontradas:', uniqueBrands);
    return uniqueBrands;
}

// Exportar las funciones para uso en otros archivos
export { getProductsByCategory, getUniqueBrands }; 