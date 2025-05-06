import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.scss';
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
    </div>
  </div>
);

// Componente para la sección de productos
const ProductosSection = ({ productos, loading }) => (
  <div className={styles.productosSection}>
    {loading ? (
      <div className={styles.loading}>Cargando productos...</div>
    ) : (
      <div className={`${styles.productosGrid} ${styles.productosGridContainer}`}>
        {productos.map(producto => (
          <ProductoCard key={producto.id} producto={producto} />
        ))}
      </div>
    )}
    <div className={styles.sectionFooter}>
      <Link href="/productos" className={styles.verMasButton}>
        Ver todos los productos <i className="fas fa-arrow-right"></i>
      </Link>
    </div>
  </div>
);

// Componente para la sección de contacto
const ContactoSection = () => (
  <section className={styles.contact}>
    <h2>Contacto</h2>
    <div className={styles.contactInfo}>
      <p><i className="fas fa-map-marker-alt"></i> Av. Riestra 5800, Lugano, Buenos Aires</p>
      <p><i className="fas fa-phone"></i> (011) 1234-5678</p>
      <p><i className="fas fa-envelope"></i> info@bicilugano.com</p>
    </div>
    <div className={styles.sectionFooter}>
      <Link href="/contacto" className={styles.verMasButton}>
        Contáctanos <i className="fas fa-arrow-right"></i>
      </Link>
    </div>
  </section>
);

// Componente para la sección sobre nosotros
const NosotrosSection = () => (
  <section className={styles.about}>
    <h2>Sobre Nosotros</h2>
    <p>BiciLugano es tu tienda de confianza en el barrio de Lugano, Buenos Aires. Nos especializamos en la venta y servicio de bicicletas, con especial énfasis en las últimas tendencias en movilidad eléctrica.</p>
    <div className={styles.sectionFooter}>
      <Link href="/nosotros" className={styles.verMasButton}>
        Conoce nuestra historia <i className="fas fa-arrow-right"></i>
      </Link>
    </div>
  </section>
);

export default function Home() {
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
    <div className={styles.home}>
      <Head>
        <title>BiciLugano - Tu tienda de bicicletas</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </Head>

      <header className={styles.header}>
        <h1><i className="fas fa-bicycle"></i> BiciLugano</h1>
        <p>Tu tienda de bicicletas en Lugano</p>
      </header>

      <div className={styles.mainContent}>
        <ProductosSection productos={productos} loading={loading} />
        <NosotrosSection />
        <ContactoSection />
      </div>

      <Footer />
    </div>
  );
} 