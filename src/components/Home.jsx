import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="hero-section">
      <motion.div 
        className="container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="row align-items-center">
          <motion.div 
            className="col-md-6 text-center text-md-start hero-content"
            variants={itemVariants}
          >
            <motion.h1 
              className="hero-title"
              variants={itemVariants}
            >
              Hi, I'm <span style={{ 
                background: 'linear-gradient(135deg, #fff 0%, #f0f0f0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>Mukesh</span> 👋
            </motion.h1>

            <motion.h4 
              className="hero-subtitle"
              variants={itemVariants}
            >
              Java Full Stack Developer
            </motion.h4>

            <motion.p 
              className="text-white-50"
              style={{ fontSize: '1.1rem', lineHeight: '1.8' }}
              variants={itemVariants}
            >
              I build modern, responsive web applications using HTML, CSS, JavaScript, React, and MERN stack.
            </motion.p>

            <motion.div 
              className="hero-cta mt-4 d-flex gap-3"
              variants={itemVariants}
            >
              <motion.a 
                href="/projects" 
                className="btn btn-primary-modern"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>
              <motion.a 
                href="/contact" 
                className="btn btn-secondary-modern"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div 
            className="col-md-6 text-center mt-4 mt-md-0"
            variants={imageVariants}
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <img
                src="https://images.unsplash.com/photo-1514543250559-83867827ecce?w=600&auto=format&fit=crop&q=60"
                alt="developer"
                className="img-fluid rounded-4"
                style={{ boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
                loading="lazy"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
