import React from "react";
import { motion } from "framer-motion";

function Skills() {
  const skillsData = [
    { name: "HTML", icon: "🏗️", level: "Advanced" },
    { name: "CSS", icon: "🎨", level: "Advanced" },
    { name: "JavaScript", icon: "⚡", level: "Advanced" },
    { name: "React", icon: "⚛️", level: "Advanced" },
    { name: "Node.js", icon: "🚀", level: "Intermediate" },
    { name: "MongoDB", icon: "🗄️", level: "Intermediate" },
    { name: "Java", icon: "☕", level: "Advanced" },
    { name: "MySQL", icon: "🔗", level: "Intermediate" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
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
          Skills & Expertise
        </motion.h2>

        <motion.div 
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-item"
              variants={itemVariants}
              whileHover={{ y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="skill-icon"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.1 }}
                whileHover={{ scale: 1.2 }}
              >
                {skill.icon}
              </motion.div>
              <p className="skill-name">{skill.name}</p>
              <p className="skill-level">{skill.level}</p>
              <motion.div
                style={{
                  height: "4px",
                  background: "linear-gradient(90deg, #667eea, #764ba2)",
                  borderRadius: "2px",
                  marginTop: "10px",
                }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: index * 0.05 }}
                viewport={{ once: true }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Section */}
        <motion.div 
          className="mt-5 pt-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h4 style={{ textAlign: "center", marginBottom: "30px", fontWeight: "700" }}>
            Also Proficient In
          </h4>
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "15px"
          }}>
            {["Git", "REST APIs", "Bootstrap", "Responsive Design", "Figma", "VS Code"].map((skill, idx) => (
              <motion.span
                key={idx}
                style={{
                  background: "linear-gradient(135deg, #667eea, #764ba2)",
                  color: "white",
                  padding: "10px 20px",
                  borderRadius: "50px",
                  fontWeight: "600",
                }}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
