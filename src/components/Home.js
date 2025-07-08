import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaPlay, FaArrowRight, FaUsers, FaChartLine, FaAward, FaHandshake } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <FaUsers />,
      title: "Coaching en Mission d'Audit",
      description: "Accompagnement personnalisé pour optimiser vos missions d'audit et améliorer vos performances."
    },
    {
      icon: <FaChartLine />,
      title: "Formation Professionnelle",
      description: "Programmes de formation conçus par des experts pour développer vos compétences."
    },
    {
      icon: <FaAward />,
      title: "Gestion d'Événements",
      description: "Organisation d'événements clés en main avec une approche professionnelle et créative."
    },
    {
      icon: <FaHandshake />,
      title: "RSE & Audit Social",
      description: "Accompagnement en responsabilité sociétale et audit social pour votre entreprise."
    }
  ];

  return (
    <div className="home">
      {/* Hero Section with Video */}
      <section className="hero-section">
        <div className="video-background">
          <video autoPlay muted loop playsInline>
            <source src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la lecture de vidéos.
          </video>
          <div className="video-overlay"></div>
        </div>
        
        <div className="hero-content">
          <motion.div
            className="container"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              GHAITI EVENT
            </motion.h1>
            
            <motion.p
              className="hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Cabinet spécialisé dans le coaching, la formation et la gestion d'événements
            </motion.p>
            
            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Notre expertise polyvalente nous permet d'apporter des solutions sur mesure 
              pour optimiser votre performance et votre impact.
            </motion.p>
            
            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <Link to="/services" className="btn btn-primary">
                Découvrir nos services
                <FaArrowRight />
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Nous contacter
              </Link>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <div className="scroll-arrow"></div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="features-section section">
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
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 40px rgba(102, 126, 234, 0.2)"
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="about-preview-section section">
        <div className="container">
          <div className="about-content">
            <motion.div
              className="about-text"
              data-aos="fade-right"
            >
              <h2>À Propos de GHAITI EVENT</h2>
              <p>
                Notre expertise polyvalente nous permet d'apporter des solutions sur mesure 
                à nos clients pour optimiser leur performance et leur impact.
              </p>
              <p>
                Nos programmes, conçus par des experts, visent à développer vos compétences 
                et à vous aider à atteindre vos objectifs. Explorez nos offres et découvrez 
                comment nous pouvons contribuer à votre succès et à celui de votre organisation.
              </p>
              <Link to="/about" className="btn btn-primary">
                En savoir plus
                <FaArrowRight />
              </Link>
            </motion.div>
            
            <motion.div
              className="about-image"
              data-aos="fade-left"
            >
              <div className="image-placeholder">
                <FaPlay />
                <span>Vidéo de présentation</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section section">
        <div className="container">
          <motion.div
            className="cta-content"
            data-aos="zoom-in"
          >
            <h2>Prêt à Optimiser Votre Performance ?</h2>
            <p>
              Vous souhaitez en savoir plus sur nos offres de formations et d'événements ? 
              N'hésitez pas à nous contacter pour discuter de vos besoins.
            </p>
            <Link to="/contact" className="btn btn-primary">
              Contactez-nous
              <FaArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 