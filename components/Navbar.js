import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Navbar.module.scss';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo}>
          <i className="fas fa-bicycle"></i>
          <h1>BiciLugano</h1>
        </Link>

        <ul className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>
          <li>
            <Link 
              href="/productos" 
              className={router.pathname === '/productos' ? styles.active : ''}
            >
              Productos
            </Link>
          </li>
          <li>
            <Link 
              href="/nosotros" 
              className={router.pathname === '/nosotros' ? styles.active : ''}
            >
              Nosotros
            </Link>
          </li>
          <li>
            <Link 
              href="/contacto" 
              className={router.pathname === '/contacto' ? styles.active : ''}
            >
              Contacto
            </Link>
          </li>
        </ul>

        <div 
          className={`${styles.mobileMenu} ${isOpen ? styles.active : ''}`} 
          onClick={toggleMenu}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </nav>
  );
} 