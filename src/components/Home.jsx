import React from "react";

const Home = () => {
  return (
    <section className="container py-5">
      <div className="row align-items-center">
        <div className="col-md-6 text-center text-md-start">
          <h1 className="mb-3">Hi, I'm Raj 👋</h1>
          <h4 className="text-primary mb-3">Java Full Stack Developer</h4>
          <p>
            I build modern, responsive web applications using  HTML, CSS, JAVASCRIP, React, and MERN stack.
          </p>

          <a href="/projects" className="btn btn-primary mt-3">
            View My Work
          </a>
        </div>

        <div className="col-md-6 text-center mt-4 mt-md-0">
          <img
            src="https://images.unsplash.com/photo-1514543250559-83867827ecce?w=600&auto=format&fit=crop&q=60"
            alt="developer"
            className="img-fluid rounded shadow"
            loading="lazy"
          />
        </div>

      </div>
    </section>
  );
};

export default Home;