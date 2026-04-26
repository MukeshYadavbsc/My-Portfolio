import React from "react";

function Skills() {
  return (
    <section id="skills" className="container py-5">
      <h2 className="text-center mb-5">Skills</h2>

      <div className="row justify-content-center">

        <div className="col-md-8">
          <div className="card shadow p-4">

            <div className="d-flex flex-wrap justify-content-center gap-3">

              <span className="badge bg-primary p-3">HTML</span>
              <span className="badge bg-success p-3">CSS</span>
              <span className="badge bg-warning text-dark p-3">JavaScript</span>
              <span className="badge bg-info text-dark p-3">React</span>
              <span className="badge bg-dark p-3">Node.js</span>
              <span className="badge bg-secondary p-3">MongoDB</span>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;