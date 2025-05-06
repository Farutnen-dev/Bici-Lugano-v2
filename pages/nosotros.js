import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Nosotros.module.scss';
import { FaHeart, FaEye, FaUsers, FaHistory, FaHandshake, FaLightbulb, FaChartLine, FaShieldAlt } from 'react-icons/fa';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import Footer from '../components/Footer';

export default function Nosotros() {
  return (
    <div className={styles.nosotros}>
      <Head>
        <title>Sobre Nosotros - BiciLugano</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </Head>

      <header className={styles.header}>
        <Link href="/" className={styles.backButton}>
          <i className="fas fa-arrow-left"></i> Volver
        </Link>
        <h1>Sobre Nosotros</h1>
      </header>

      <main className={styles.main}>
        <div className={styles.nosotrosHeader}>
          <h1>Sobre Nosotros</h1>
          <p>Conoce más sobre nuestra historia, misión y valores</p>
        </div>

        <div className={styles.nosotrosContent}>
          <div className={styles.misionVision}>
            <div className={styles.misionCard}>
              <i><FaHeart /></i>
              <h3>Nuestra Misión</h3>
              <p>Proporcionar soluciones de movilidad sostenible y accesibles, promoviendo un estilo de vida saludable y respetuoso con el medio ambiente a través de nuestras bicicletas de alta calidad.</p>
            </div>
            <div className={styles.visionCard}>
              <i><FaEye /></i>
              <h3>Nuestra Visión</h3>
              <p>Ser líderes en la transformación de la movilidad urbana, inspirando a más personas a elegir la bicicleta como medio de transporte principal y contribuyendo a ciudades más limpias y saludables.</p>
            </div>
          </div>

          <div className={styles.valores}>
            <h2>Nuestros Valores</h2>
            <div className={styles.valoresGrid}>
              <div className={styles.valorCard}>
                <i><FaHandshake /></i>
                <h3>Compromiso</h3>
                <p>Nos dedicamos a ofrecer el mejor servicio y productos de calidad a nuestros clientes.</p>
              </div>
              <div className={styles.valorCard}>
                <i><FaLightbulb /></i>
                <h3>Innovación</h3>
                <p>Buscamos constantemente nuevas soluciones y mejoras en nuestros productos.</p>
              </div>
              <div className={styles.valorCard}>
                <i><FaChartLine /></i>
                <h3>Excelencia</h3>
                <p>Nos esforzamos por la excelencia en cada aspecto de nuestro negocio.</p>
              </div>
              <div className={styles.valorCard}>
                <i><FaShieldAlt /></i>
                <h3>Confianza</h3>
                <p>Construimos relaciones duraderas basadas en la confianza y la transparencia.</p>
              </div>
            </div>
          </div>

          <div className={styles.equipo}>
            <h2>Nuestro Equipo</h2>
            <div className={styles.equipoGrid}>
              <div className={styles.miembroCard}>
                <div className={styles.miembroImagen}>
                  <img src="/team/member1.jpg" alt="Miembro del equipo" />
                </div>
                <h3>Juan Pérez</h3>
                <p className={styles.cargo}>CEO & Fundador</p>
                <p>Apasionado por la movilidad sostenible y la innovación en el sector de las bicicletas.</p>
                <div className={styles.socialLinks}>
                  <a href="#"><FaFacebookF /></a>
                  <a href="#"><FaTwitter /></a>
                  <a href="#"><FaLinkedinIn /></a>
                  <a href="#"><FaInstagram /></a>
                </div>
              </div>
              <div className={styles.miembroCard}>
                <div className={styles.miembroImagen}>
                  <img src="/team/member2.jpg" alt="Miembro del equipo" />
                </div>
                <h3>María García</h3>
                <p className={styles.cargo}>Directora de Operaciones</p>
                <p>Experta en logística y gestión de calidad con más de 10 años en el sector.</p>
                <div className={styles.socialLinks}>
                  <a href="#"><FaFacebookF /></a>
                  <a href="#"><FaTwitter /></a>
                  <a href="#"><FaLinkedinIn /></a>
                  <a href="#"><FaInstagram /></a>
                </div>
              </div>
              <div className={styles.miembroCard}>
                <div className={styles.miembroImagen}>
                  <img src="/team/member3.jpg" alt="Miembro del equipo" />
                </div>
                <h3>Carlos Rodríguez</h3>
                <p className={styles.cargo}>Director Técnico</p>
                <p>Ingeniero especializado en diseño y desarrollo de bicicletas de alto rendimiento.</p>
                <div className={styles.socialLinks}>
                  <a href="#"><FaFacebookF /></a>
                  <a href="#"><FaTwitter /></a>
                  <a href="#"><FaLinkedinIn /></a>
                  <a href="#"><FaInstagram /></a>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.historia}>
            <h2>Nuestra Historia</h2>
            <div className={styles.timeline}>
              <div className={styles.timelineItem}>
                <div className={styles.fecha}>2010</div>
                <h3>Nacimiento de la Empresa</h3>
                <p>Fundamos nuestra empresa con la visión de revolucionar la movilidad urbana.</p>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.fecha}>2015</div>
                <h3>Expansión Nacional</h3>
                <p>Ampliamos nuestras operaciones a nivel nacional con nuevas tiendas.</p>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.fecha}>2018</div>
                <h3>Innovación en Productos</h3>
                <p>Lanzamos nuestra línea de bicicletas eléctricas de alta gama.</p>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.fecha}>2023</div>
                <h3>Liderazgo en el Sector</h3>
                <p>Nos convertimos en referentes del mercado con más de 50,000 clientes satisfechos.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 