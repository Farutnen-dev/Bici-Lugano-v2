import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Productos.module.css';
import Footer from '../components/Footer';

// Componente para mostrar un producto individual
const ProductoCard = ({ producto }) => (
  <div className={styles.productoCard}>
    <div className={styles.productoImagen}>
      <img src={producto.imagen} alt={producto.nombre} />
    </div>
    <div className={styles.productoInfo}>
      <h2>{producto.nombre}</h2>
      <p className={styles.marca}>{producto.marca} - {producto.modelo}</p>
      <p className={styles.categoria}>{producto.categoria}</p>
      <p className={styles.precio}>${producto.precio.toLocaleString()}</p>
      <p className={styles.descripcion}>{producto.descripcion}</p>
      <Link href={`/productos/${producto.id}`} className={styles.verDetalleButton}>
        Ver detalle
      </Link>
    </div>
  </div>
);

// Componente para la lista de productos
const ProductosList = ({ productos, loading }) => {
  if (loading) {
    return <div className={styles.loading}>Cargando productos...</div>;
  }

  return (
    <div className={styles.productosGrid}>
      {productos.map(producto => (
        <ProductoCard key={producto.id} producto={producto} />
      ))}
    </div>
  );
};

export default function Productos() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const res = await fetch('/api/productos');
        const data = await res.json();
        setProductos(data);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductos();
  }, []);

  return (
    <div className={styles.productos}>
      <Head>
        <title>Productos - BiciLugano</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </Head>

      <header className={styles.header}>
        <Link href="/" className={styles.backButton}>
          <i className="fas fa-arrow-left"></i> Volver
        </Link>
        <h1>Nuestros Productos</h1>
      </header>

      <main className={styles.main}>
        <ProductosList productos={productos} loading={loading} />
      </main>

      <Footer />
    </div>
  );
} 