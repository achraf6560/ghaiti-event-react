import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaAward, FaHandshake, FaLightbulb, FaChartLine, FaHeart } from 'react-icons/fa';
import './About.css';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      icon: <FaUsers />,
      title: "Excellence",
      description: "Nous visons l'excellence dans tous nos services et accompagnements."
    },
    {
      icon: <FaHandshake />,
      title: "Confiance",
      description: "La confiance de nos clients est au cœur de notre relation professionnelle."
    },
    {
      icon: <FaLightbulb />,
      title: "Innovation",
      description: "Nous innovons constamment pour offrir des solutions adaptées."
    },
    {
      icon: <FaHeart />,
      title: "Engagement",
      description: "Nous nous engageons pleinement dans la réussite de vos projets."
    }
  ];

  const stats = [
    { number: "50+", label: "Clients Satisfaits" },
    { number: "100+", label: "Projets Réalisés" },
    { number: "5+", label: "Années d'Expérience" },
    { number: "95%", label: "Taux de Satisfaction" }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero section">
        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="hero-title">À Propos de GHAITI EVENT</h1>
            <p className="hero-subtitle">
              Votre partenaire de confiance pour l'excellence et l'innovation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section section">
        <div className="container">
          <div className="story-content">
            <motion.div
              className="story-text"
              data-aos="fade-right"
            >
              <h2>Notre Histoire</h2>
              <p>
                GHAITI EVENT est un cabinet spécialisé dans le coaching en mission d'audit, 
                la formation, la gestion d'événements clés en main, ainsi que l'accompagnement 
                en responsabilité sociétale des entreprises (RSE) et l'audit social.
              </p>
              <p>
                Notre expertise polyvalente nous permet d'apporter des solutions sur mesure 
                à nos clients pour optimiser leur performance et leur impact. Chez GHAITI EVENT, 
                nous nous engageons à vous offrir des solutions de formation et de conseil 
                adaptées à vos besoins professionnels.
              </p>
              <p>
                Nos programmes, conçus par des experts, visent à développer vos compétences 
                et à vous aider à atteindre vos objectifs. Explorez nos offres et découvrez 
                comment nous pouvons contribuer à votre succès et à celui de votre organisation.
              </p>
            </motion.div>
            
            <motion.div
              className="story-image"
              data-aos="fade-left"
            >
              <div className="image-placeholder">
                <FaChartLine />
                <span>Notre Expertise</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section section">
        <div className="container">
          <motion.h2
            className="section-title"
            data-aos="fade-up"
          >
            Nos Valeurs
          </motion.h2>
          
          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="value-card"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 40px rgba(102, 126, 234, 0.2)"
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="value-icon">
                  {value.icon}
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section section">
        <div className="container">
          <motion.h2
            className="section-title"
            data-aos="fade-up"
          >
            Nos Chiffres Clés
          </motion.h2>
          
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-card"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section section">
        <div className="container">
          <div className="mission-content">
            <motion.div
              className="mission-text"
              data-aos="fade-right"
            >
              <h2>Notre Mission</h2>
              <p>
                Accompagner nos clients vers l'excellence en leur offrant des solutions 
                innovantes et personnalisées dans les domaines du coaching, de la formation 
                et de la gestion d'événements.
              </p>
              <h3>Notre Vision</h3>
              <p>
                Devenir le partenaire de référence pour l'optimisation des performances 
                et l'impact positif des organisations.
              </p>
            </motion.div>
            
            <motion.div
              className="mission-image"
              data-aos="fade-left"
            >
              <div className="image-placeholder">
                <FaAward />
                <span>Excellence & Innovation</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section section">
        <div className="container">
          <motion.h2
            className="section-title"
            data-aos="fade-up"
          >
            Notre Équipe
          </motion.h2>
          
          <motion.p
            className="section-subtitle"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Une équipe d'experts passionnés et expérimentés pour vous accompagner
          </motion.p>
          
          <div className="team-content">
            <motion.div
              className="team-text"
              data-aos="fade-right"
            >
              <h3>Des Experts à Votre Service</h3>
              <p>
                Notre équipe est composée de professionnels expérimentés dans leurs 
                domaines respectifs. Nous combinons expertise technique et approche 
                humaine pour vous offrir un accompagnement de qualité.
              </p>
              <ul>
                <li>Experts en audit et conformité</li>
                <li>Formateurs certifiés</li>
                <li>Organisateurs d'événements professionnels</li>
                <li>Consultants en RSE</li>
              </ul>
            </motion.div>
            
            <motion.div
              className="team-image"
              data-aos="fade-left"
            >
              <div className="image-placeholder">
                <FaUsers />
                <span>Notre Équipe</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta-section section">
        <div className="container">
          <motion.div
            className="cta-content"
            data-aos="zoom-in"
          >
            <h2>Prêt à Travailler Avec Nous ?</h2>
            <p>
              Découvrez comment GHAITI EVENT peut vous accompagner vers le succès 
              et l'optimisation de vos performances.
            </p>
            <a href="/contact" className="btn btn-primary">
              Contactez-nous
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About; 