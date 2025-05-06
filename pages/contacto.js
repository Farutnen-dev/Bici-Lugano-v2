import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Contact.module.scss';
import Footer from '../components/Footer';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className={styles.contact}>
      <Head>
        <title>Contacto - BiciLugano</title>
      </Head>

      <div className={styles.contactHeader}>
        <h1>Contacto</h1>
        <p>Estamos aquí para ayudarte. ¡Contáctanos!</p>
      </div>

      <div className={styles.contactContent}>
        <div className={styles.contactGrid}>
          <div className={styles.contactInfo}>
            <div className={styles.infoItem}>
              <i><FaMapMarkerAlt /></i>
              <div className={styles.infoContent}>
                <h3>Dirección</h3>
                <p>Av. Riestra 5800</p>
                <p>Lugano, Buenos Aires</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <i><FaPhone /></i>
              <div className={styles.infoContent}>
                <h3>Teléfono</h3>
                <p>(011) 1234-5678</p>
                <p>WhatsApp: +54 11 1234-5678</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <i><FaEnvelope /></i>
              <div className={styles.infoContent}>
                <h3>Email</h3>
                <p>info@bicilugano.com</p>
                <p>ventas@bicilugano.com</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <i><FaClock /></i>
              <div className={styles.infoContent}>
                <h3>Horario de Atención</h3>
                <p>Lunes a Viernes: 9:00 - 18:00</p>
                <p>Sábados: 9:00 - 13:00</p>
              </div>
            </div>
          </div>

          <div className={styles.contactForm}>
            <h2>Envíanos un mensaje</h2>
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="nombre">Nombre</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  placeholder="Tu nombre completo"
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="tu@email.com"
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="telefono">Teléfono</label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  placeholder="Tu número de teléfono"
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="mensaje">Mensaje</label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  placeholder="¿En qué podemos ayudarte?"
                ></textarea>
              </div>
              <button type="submit" className={styles.submitButton}>
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>

        <div className={styles.contactHours}>
          <h3>Horarios de Atención</h3>
          <div className={styles.hoursGrid}>
            <div className={styles.day}>
              <div className={styles.dayName}>Lunes - Viernes</div>
              <div className={styles.hours}>9:00 - 18:00</div>
            </div>
            <div className={styles.day}>
              <div className={styles.dayName}>Sábados</div>
              <div className={styles.hours}>9:00 - 13:00</div>
            </div>
            <div className={styles.day}>
              <div className={styles.dayName}>Domingos</div>
              <div className={styles.hours}>Cerrado</div>
            </div>
            <div className={styles.day}>
              <div className={styles.dayName}>Feriados</div>
              <div className={styles.hours}>Consultar</div>
            </div>
          </div>
        </div>

        <div className={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.1234567890123!2d-58.12345678901234!3d-34.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDA3JzI0LjUiUyA1OMKwMDcnMjQuNSJX!5e0!3m2!1ses!2sar!4v1234567890123!5m2!1ses!2sar"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className={styles.socialLinks}>
          <a href="#" aria-label="Facebook"><FaFacebookF /></a>
          <a href="#" aria-label="Twitter"><FaTwitter /></a>
          <a href="#" aria-label="Instagram"><FaInstagram /></a>
          <a href="#" aria-label="WhatsApp"><FaWhatsapp /></a>
        </div>
      </div>

      <Footer />
    </div>
  );
} 