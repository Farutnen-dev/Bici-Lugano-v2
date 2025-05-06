export default function handler(req, res) {
  const productos = [
    { 
      id: 1, 
      marca: 'Trek',
      modelo: 'Marlin 5',
      nombre: 'Bicicleta de Montaña Trek Marlin 5', 
      categoria: 'montana',
      precio: 800000,
      descripcion: 'Bicicleta de montaña de alta calidad',
      imagen: 'https://example.com/marlin5.jpg'
    },
    { 
      id: 2, 
      marca: 'Specialized',
      modelo: 'Rockhopper',
      nombre: 'Bicicleta de Montaña Specialized', 
      categoria: 'montana',
      precio: 900000,
      descripcion: 'Bicicleta de montaña profesional',
      imagen: 'https://example.com/rockhopper.jpg'
    },
    { 
      id: 3, 
      marca: 'Giant',
      modelo: 'Escape 2',
      nombre: 'Bicicleta Urbana Giant', 
      categoria: 'urbana',
      precio: 450000,
      descripcion: 'Bicicleta urbana versátil',
      imagen: 'https://example.com/escape2.jpg'
    },
    { 
      id: 4, 
      marca: 'Scott',
      modelo: 'Speedster 20',
      nombre: 'Bicicleta de Ruta Scott', 
      categoria: 'ruta',
      precio: 1200000,
      descripcion: 'Bicicleta de ruta de alto rendimiento',
      imagen: 'https://example.com/speedster.jpg'
    },
    { 
      id: 5, 
      marca: 'Cannondale',
      modelo: 'Trail 6',
      nombre: 'Bicicleta de Montaña Cannondale', 
      categoria: 'montana',
      precio: 750000,
      descripcion: 'Bicicleta de montaña todo terreno',
      imagen: 'https://example.com/trail6.jpg'
    },
    { 
      id: 6, 
      marca: 'Merida',
      modelo: 'Crossway 20',
      nombre: 'Bicicleta Híbrida Merida', 
      categoria: 'hibrida',
      precio: 550000,
      descripcion: 'Bicicleta híbrida versátil',
      imagen: 'https://example.com/crossway.jpg'
    }
  ];

  if (req.method === 'GET') {
    res.status(200).json(productos);
  } else {
    res.status(405).json({ message: 'Método no permitido' });
  }
} 