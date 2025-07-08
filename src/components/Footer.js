import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaArrowUp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            {/* Company Info */}
            <motion.div
              className="footer-section"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3>GHAITI EVENT</h3>
              <p>
                Cabinet spécialisé dans le coaching, la formation et la gestion d'événements. 
                Votre partenaire de confiance pour l'excellence et l'innovation.
              </p>
              <div className="social-links">
                <a href="#" aria-label="Facebook">
                  <FaFacebook />
                </a>
                <a href="#" aria-label="Twitter">
                  <FaTwitter />
                </a>
                <a href="#" aria-label="LinkedIn">
                  <FaLinkedin />
                </a>
                <a href="#" aria-label="Instagram">
                  <FaInstagram />
                </a>
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              className="footer-section"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4>Nos Services</h4>
              <ul>
                <li><Link to="/services">Coaching en Mission d'Audit</Link></li>
                <li><Link to="/services">Formation Professionnelle</Link></li>
                <li><Link to="/services">Gestion d'Événements</Link></li>
                <li><Link to="/services">RSE & Audit Social</Link></li>
                <li><Link to="/services">Conseil en Performance</Link></li>
              </ul>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              className="footer-section"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4>Liens Rapides</h4>
              <ul>
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/about">À Propos</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><a href="#privacy">Politique de Confidentialité</a></li>
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="footer-section"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4>Contact</h4>
              <div className="contact-info">
                <div className="contact-item">
                  <FaEnvelope />
                  <a href="mailto:ghaitievent01@gmail.com">ghaitievent01@gmail.com</a>
                </div>
                <div className="contact-item">
                  <FaPhone />
                  <a href="tel:+212666655594">+212 666 655 594</a>
                </div>
                <div className="contact-item">
                  <FaMapMarkerAlt />
                  <span>Agdal, Rabat</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} GHAITI EVENT. Tous droits réservés.</p>
            <motion.button
              className="scroll-to-top"
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Retour en haut"
            >
              <FaArrowUp />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 