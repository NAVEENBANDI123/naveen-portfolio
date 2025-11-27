function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <h2 className="section-title gradient-text">Projects</h2>
        <p className="section-subtitle">
          Key modules and systems developed as part of enterprise healthcare applications.
        </p>

        <div className="row mt-5 g-4">
          {/* PROJECT 1 */}
          <div className="col-md-4">
            <div className="project-card glass lift p-4 h-100 rounded-4">
              <h5 className="fw-semibold">
                Hospital Certificate Generation System
              </h5>

              <p className="text-muted mt-3">
                Developed a backend-driven module to generate official hospital
                certificates such as <strong>Death Certificates</strong> and
                <strong> Medico-Legal Case (MLC)</strong> intimations within
                the Neura healthcare platform.
              </p>

              <ul className="small text-muted mt-3">
                <li>Implemented JSP-based certificate templates</li>
                <li>Integrated backend validation using Java & Spring</li>
                <li>Fetched and formatted patient data from Informix DB</li>
              </ul>

              <p className="text-primary small mt-3">
                Java • Spring • JSP • IBM Informix • SQL
              </p>
            </div>
          </div>

          {/* PROJECT 2 */}
          <div className="col-md-4">
            <div className="project-card glass lift p-4 h-100 rounded-4">
              <h5 className="fw-semibold">
                Patient & Episode Management Module
              </h5>

              <p className="text-muted mt-3">
                Worked on core backend logic for managing patient records,
                visits, episodes, and clinical service workflows in
                a hospital management system.
              </p>

              <ul className="small text-muted mt-3">
                <li>Handled patient demographics and episode tracking</li>
                <li>Optimized SQL queries for faster data retrieval</li>
                <li>Integrated JSP views with backend services</li>
              </ul>

              <p className="text-primary small mt-3">
                Java • JSP • Spring • SQL • Bootstrap
              </p>
            </div>
          </div>

          {/* PROJECT 3 */}
          <div className="col-md-4">
            <div className="project-card glass lift p-4 h-100 rounded-4">
              <h5 className="fw-semibold">
                Neura 6 Web Application Enhancement
              </h5>

              <p className="text-muted mt-3">
                Contributed to enhancing UI usability and backend stability
                of <strong>Neura 6</strong>, a large-scale healthcare web
                application used for patient management, billing,
                pharmacy, and appointments.
              </p>

              <ul className="small text-muted mt-3">
                <li>Developed and tested REST APIs using Spring Boot</li>
                <li>Validated APIs using Postman</li>
                <li>Improved frontend responsiveness using HTML & CSS</li>
              </ul>

              <p className="text-primary small mt-3">
                Spring Boot • REST APIs • Java • HTML • CSS • JavaScript • Postman
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
