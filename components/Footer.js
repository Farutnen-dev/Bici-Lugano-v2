import Link from 'next/link';
import styles from '../styles/Footer.module.scss';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3>Sobre Nosotros</h3>
          <p>BiciLugano es tu tienda de confianza para todo lo relacionado con bicicletas. Ofrecemos productos de calidad y servicio excepcional.</p>
          <div className={styles.socialLinks}>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>

        <div className={styles.footerSection}>
          <h3>Enlaces Rápidos</h3>
          <ul>
            <li><Link href="/">Inicio</Link></li>
            <li><Link href="/productos">Productos</Link></li>
            <li><Link href="/nosotros">Nosotros</Link></li>
            <li><Link href="/contacto">Contacto</Link></li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h3>Contacto</h3>
          <p>Av. Riestra 5800</p>
          <p>Lugano, Buenos Aires</p>
          <p>Tel: (011) 1234-5678</p>
          <p>Email: info@bicilugano.com</p>
        </div>
      </div>

      <div className={styles.newsletterSection}>
        <h3>Suscríbete a nuestro newsletter</h3>
        <p>Recibe las últimas novedades y ofertas especiales</p>
        <form className={styles.newsletterForm}>
          <input type="email" placeholder="Tu email" required />
          <button type="submit">Suscribirse</button>
        </form>
      </div>

      <div className={styles.footerBottom}>
        <p>&copy; 2024 BiciLugano. Todos los derechos reservados.</p>
        <p>
          <Link href="/privacidad">Política de Privacidad</Link> | 
          <Link href="/terminos"> Términos y Condiciones</Link>
        </p>
      </div>
    </footer>
  );
} 