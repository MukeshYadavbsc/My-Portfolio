import React from "react";

function About() {
  return (
    <section id="about" className="container py-5">
      <div className="row align-items-center">
        <div className="col-md-5 text-center mb-4">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500"
            alt="about"
            className="img-fluid rounded shadow"
            loading="lazy"/>
        </div>
        <div className="col-md-7">
          <h2 className="mb-3">About Me</h2>

          <p>
            Hello! I'm <strong>Mukesh Yadav</strong>, a passionate 
            <strong> Java Full Stack Developer</strong> who loves building modern,
            responsive, and user-friendly web applications.
          </p>
          <p>
            I specialize in technologies like <strong>Java, React, Node.js, MongoDB</strong> 
            and enjoy creating full-stack applications from scratch.
          </p>
          <p>
            I am always eager to learn new technologies and improve my skills to 
            build high-quality and scalable solutions.
          </p>

          <div className="mt-3">
            <span className="badge bg-primary me-2">Java</span>
            <span className="badge bg-success me-2">React</span>
            <span className="badge bg-warning text-dark me-2">JavaScript</span>
            <span className="badge bg-dark me-2">Node.js</span>
            <span className="badge bg-secondary me-2">MongoDB</span>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;