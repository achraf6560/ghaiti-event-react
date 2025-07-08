import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaChartLine, FaAward, FaHandshake, FaGraduationCap, FaCalendarAlt, FaShieldAlt, FaLightbulb } from 'react-icons/fa';
import './Services.css';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: <FaUsers />,
      title: "Coaching en Mission d'Audit",
      description: "Accompagnement personnalisé pour optimiser vos missions d'audit et améliorer vos performances professionnelles.",
      features: [
        "Évaluation des processus d'audit",
        "Formation aux meilleures pratiques",
        "Accompagnement sur le terrain",
        "Optimisation des méthodologies"
      ]
    },
    {
      icon: <FaGraduationCap />,
      title: "Formation Professionnelle",
      description: "Programmes de formation conçus par des experts pour développer vos compétences et celles de vos équipes.",
      features: [
        "Formations sur mesure",
        "Méthodes pédagogiques innovantes",
        "Suivi post-formation",
        "Certifications professionnelles"
      ]
    },
    {
      icon: <FaCalendarAlt />,
      title: "Gestion d'Événements",
      description: "Organisation d'événements clés en main avec une approche professionnelle et créative.",
      features: [
        "Événements d'entreprise",
        "Conférences et séminaires",
        "Événements de networking",
        "Logistique complète"
      ]
    },
    {
      icon: <FaHandshake />,
      title: "RSE & Audit Social",
      description: "Accompagnement en responsabilité sociétale et audit social pour votre entreprise.",
      features: [
        "Diagnostic RSE",
        "Stratégie de développement durable",
        "Audit social complet",
        "Reporting extra-financier"
      ]
    },
    {
      icon: <FaChartLine />,
      title: "Conseil en Performance",
      description: "Optimisation de vos processus et amélioration de vos performances organisationnelles.",
      features: [
        "Analyse des processus",
        "Recommandations stratégiques",
        "Mise en œuvre des améliorations",
        "Suivi des résultats"
      ]
    },
    {
      icon: <FaShieldAlt />,
      title: "Conformité & Risques",
      description: "Accompagnement en matière de conformité réglementaire et de gestion des risques.",
      features: [
        "Audit de conformité",
        "Évaluation des risques",
        "Mise en place de contrôles",
        "Formation des équipes"
      ]
    }
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero section">
        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="hero-title">Nos Services</h1>
            <p className="hero-subtitle">
              Des solutions sur mesure pour optimiser votre performance et votre impact
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-grid-section section">
        <div className="container">
          <motion.h2
            className="section-title"
            data-aos="fade-up"
          >
            Nos Domaines d'Expertise
          </motion.h2>
          
          <motion.p
            className="section-subtitle"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Chez GHAITI EVENT, nous nous engageons à vous offrir des solutions 
            de formation et de conseil adaptées à vos besoins professionnels.
          </motion.p>

          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="service-card"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 40px rgba(102, 126, 234, 0.2)"
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="service-icon">
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>
                      <FaLightbulb />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section section">
        <div className="container">
          <motion.h2
            className="section-title"
            data-aos="fade-up"
          >
            Notre Approche
          </motion.h2>
          
          <div className="process-steps">
            <motion.div
              className="process-step"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <div className="step-number">01</div>
              <h3>Diagnostic</h3>
              <p>Analyse approfondie de vos besoins et de votre contexte</p>
            </motion.div>
            
            <motion.div
              className="process-step"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="step-number">02</div>
              <h3>Stratégie</h3>
              <p>Élaboration d'une solution personnalisée et adaptée</p>
            </motion.div>
            
            <motion.div
              className="process-step"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <div className="step-number">03</div>
              <h3>Mise en œuvre</h3>
              <p>Accompagnement dans la réalisation de votre projet</p>
            </motion.div>
            
            <motion.div
              className="process-step"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="step-number">04</div>
              <h3>Suivi</h3>
              <p>Évaluation des résultats et optimisation continue</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta-section section">
        <div className="container">
          <motion.div
            className="cta-content"
            data-aos="zoom-in"
          >
            <h2>Prêt à Commencer Votre Projet ?</h2>
            <p>
              Contactez-nous pour discuter de vos besoins et découvrir 
              comment nous pouvons vous accompagner vers le succès.
            </p>
            <a href="/contact" className="btn btn-primary">
              Demander un devis
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;