import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaPaperPlane, FaCheck } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simuler l'envoi du formulaire
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      });
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "ghaitievent01@gmail.com",
      link: "mailto:ghaitievent01@gmail.com"
    },
    {
      icon: <FaPhone />,
      title: "Téléphone",
      value: "+212 666 655 594",
      link: "tel:+212666655594"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Adresse",
      value: "Agdal, Rabat",
      link: "#"
    },
    {
      icon: <FaClock />,
      title: "Horaires",
      value: "Lun-Ven: 9h-18h",
      link: "#"
    }
  ];

  const services = [
    "Coaching en Mission d'Audit",
    "Formation Professionnelle",
    "Gestion d'Événements",
    "RSE & Audit Social",
    "Conseil en Performance",
    "Conformité & Risques"
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero section">
        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="hero-title">Contactez-nous</h1>
            <p className="hero-subtitle">
              Prêt à optimiser votre performance ? Parlons de votre projet
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <motion.div
              className="contact-form-section"
              data-aos="fade-right"
            >
              <h2>Envoyez-nous un message</h2>
              <p>
                Vous souhaitez en savoir plus sur nos offres de formations et d'événements ? 
                N'hésitez pas à nous contacter pour discuter de vos besoins.
              </p>
              
              {isSubmitted ? (
                <motion.div
                  className="success-message"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <FaCheck />
                  <h3>Message envoyé !</h3>
                  <p>Nous vous répondrons dans les plus brefs délais.</p>
                </motion.div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Nom complet *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Téléphone</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="company">Entreprise</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="service">Service d'intérêt</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                    >
                      <option value="">Sélectionnez un service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Décrivez votre projet ou vos besoins..."
                    ></textarea>
                  </div>
                  
                  <motion.button
                    type="submit"
                    className="btn btn-primary submit-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaPaperPlane />
                    Envoyer le message
                  </motion.button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="contact-info-section"
              data-aos="fade-left"
            >
              <h2>Informations de contact</h2>
              <p>
                Notre équipe d'experts est là pour vous accompagner dans vos projets. 
                N'hésitez pas à nous contacter par le moyen qui vous convient le mieux.
              </p>
              
              <div className="contact-info-list">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="contact-info-item"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="contact-icon">
                      {info.icon}
                    </div>
                    <div className="contact-details">
                      <h3>{info.title}</h3>
                      <a href={info.link}>{info.value}</a>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="contact-cta">
                <h3>Besoin d'une réponse rapide ?</h3>
                <p>
                  Pour les demandes urgentes, n'hésitez pas à nous appeler directement.
                </p>
                <a href="tel:+33123456789" className="btn btn-secondary">
                  <FaPhone />
                  Appeler maintenant
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section section">
        <div className="container">
          <motion.h2
            className="section-title"
            data-aos="fade-up"
          >
            Notre Localisation
          </motion.h2>
          
          <motion.div
            className="map-container"
            data-aos="zoom-in"
          >
            <div className="map-placeholder">
              <FaMapMarkerAlt />
              <span>Carte interactive</span>
              <p>Paris, France</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section section">
        <div className="container">
          <motion.h2
            className="section-title"
            data-aos="fade-up"
          >
            Questions Fréquentes
          </motion.h2>
          
          <div className="faq-grid">
            <motion.div
              className="faq-item"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3>Comment se déroule une première consultation ?</h3>
              <p>
                Nous organisons un entretien initial pour comprendre vos besoins 
                et vous proposer une solution adaptée à votre situation.
              </p>
            </motion.div>
            
            <motion.div
              className="faq-item"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3>Quels sont vos délais de réponse ?</h3>
              <p>
                Nous nous engageons à répondre à toutes les demandes dans un délai 
                maximum de 24 heures ouvrées.
              </p>
            </motion.div>
            
            <motion.div
              className="faq-item"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h3>Proposez-vous des devis gratuits ?</h3>
              <p>
                Oui, nous établissons des devis détaillés et personnalisés 
                sans engagement pour tous nos services.
              </p>
            </motion.div>
            
            <motion.div
              className="faq-item"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <h3>Intervenez-vous en France et à l'international ?</h3>
              <p>
                Nous intervenons principalement en France mais pouvons également 
                accompagner des projets internationaux selon les besoins.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 