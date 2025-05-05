// Configuración de la API de AppSheet
const APP_ID = 'usadRzBy6S43eGSOaru1U7';
const API_KEY = '9joyZ-WtrJU-cVV6Z-k2bTU-mbjcy-DJMyh-z5dNi-RvEMo'; // Reemplazar con tu API key de AppSheet

// Función para obtener datos de AppSheet
async function getAppSheetData(tableName) {
    try {
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
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al obtener datos:', error);
        return null;
    }
}

// Función para obtener productos por categoría
async function getProductsByCategory(category) {
    const data = await getAppSheetData('Productos');
    if (!data) return [];

    return data
        .filter(producto => producto.categoria.toLowerCase() === category.toLowerCase())
        .map(producto => ({
            marca: producto.marca,
            modelo: producto.modelo,
            categoria: producto.categoria,
            precio: Number(producto.precio),
            descripcion: producto.descripcion,
            imagen: producto.imagen
        }));
}

// Función para obtener todas las marcas únicas
async function getUniqueBrands() {
    const data = await getAppSheetData('Productos');
    if (!data) return [];

    const brands = new Set();
    data.forEach(producto => brands.add(producto.marca));
    return Array.from(brands);
}

// Exportar las funciones para uso en otros archivos
export { getProductsByCategory, getUniqueBrands }; 