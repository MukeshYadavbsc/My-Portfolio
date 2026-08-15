import React from "react";
import { motion } from "framer-motion";

function Projects() {
  const projectData = [
    {
      title: "Tours & Travels Website",
      description: "MERN stack travel booking website with real-time updates.",
      link: "https://github.com/yourrepo1",
      image: "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.0",
      icon: "✈️",
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio with modern UI/UX and animations.",
      link: "https://github.com/yourrepo2",
      image: "https://static.wixstatic.com/media/b9cef4_c3b157ccaf09485f8a6714daea323d03~mv2.jpg/v1/fill/w_1000,h_667,al_c,q_85,usm_0.66_1.00_0.01/b9cef4_c3b157ccaf09485f8a6714daea323d03~mv2.jpg",
      icon: "💼",
    },
    {
      title: "E-commerce App",
      description: "Online shopping app with cart system and payment integration.",
      link: "https://github.com/yourrepo3",
      image: "https://plus.unsplash.com/premium_photo-1684785618727-378a3a5e91c5?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZWNvbW1lcmNlJTIwd2Vic2l0ZXxlbnwwfHwwfHx8MA%3D%3D",
      icon: "🛒",
    },
    {
      title: "Blog Website",
      description: "Blog platform with CRUD operations and user authentication.",
      link: "https://github.com/yourrepo4",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.0",
      icon: "📝",
    },
    {
      title: "Chat Application",
      description: "Real-time chat app with Socket.io and message history.",
      link: "https://github.com/yourrepo5",
      image: "https://img.magnific.com/premium-vector/chat-app-logo-design-template-can-be-used-icon-chat-application-logo_605910-1724.jpg",
      icon: "💬",
    },
    {
      title: "Task Management",
      description: "Productivity app with drag-drop and real-time collaboration.",
      link: "https://github.com/yourrepo6",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.0",
      icon: "✅",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="section section-light py-5">
      <div className="container">
        <motion.h2 
          className="section-title mb-5"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>

        <motion.div 
          className="row g-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projectData.map((project, index) => (
            <motion.div 
              key={index}
              className="col-md-6 col-lg-4"
              variants={itemVariants}
            >
              <motion.div
                className="project-card h-100"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="project-image position-relative overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-100 h-100"
                    style={{ objectFit: "cover" }}
                    loading="lazy"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <motion.div 
                    className="project-overlay"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.a
                      href={project.link}
                      className="project-link"
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <i className="bi bi-github"></i>
                    </motion.a>
                    <motion.a
                      href={project.link}
                      className="project-link"
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <i className="bi bi-arrow-up-right"></i>
                    </motion.a>
                  </motion.div>
                </div>

                <div className="project-content">
                  <div style={{ fontSize: '2rem', marginBottom: '10px' }}>
                    {project.icon}
                  </div>
                  <h5 className="project-title">{project.title}</h5>
                  <p className="project-description">{project.description}</p>
                  <motion.a
                    href={project.link}
                    className="btn btn-sm"
                    style={{
                      background: "linear-gradient(135deg, #667eea, #764ba2)",
                      color: "white",
                      border: "none",
                      borderRadius: "8px",
                      padding: "8px 16px",
                      textDecoration: "none",
                      display: "inline-block",
                    }}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Code →
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
