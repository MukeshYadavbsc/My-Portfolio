import React from "react";

function Projects() {

  const projectData = [
    {
      title: "Tours & Travels Website",
      description: "MERN stack travel booking website.",
      link: "https://github.com/yourrepo1",
      image: "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio made using React.",
      link: "https://github.com/yourrepo2",
      image: "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "E-commerce App",
      description: "Online shopping app with cart system.",
      link: "https://github.com/yourrepo3",
      image: "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Blog Website",
      description: "Blog platform with CRUD operations.",
      link: "https://github.com/yourrepo4",
      image: "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  return (
    <section className="container py-5">
      <h2 className="text-center mb-5">Projects</h2>

      <div className="row">
        {projectData.map((project, index) => (
          <div className="col-md-6 col-lg-4 mb-4" key={index}>
            <div className="card shadow h-100">
              <img
                src={project.image}className="card-img-top"alt={project.title}loading="lazy"/>

              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <a
                  href={project.link}
                  className="btn btn-primary" target="_blank"  rel="noreferrer"> View Code
                </a>
              </div>

            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;