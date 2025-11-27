function Experience() {
  return (
    <section id="experience" className="section-padding bg-dark text-light">
      <div className="container">

        <h2 className="section-title gradient-text">Experience & Education</h2>

        {/* PROFESSIONAL EXPERIENCE */}
        <div className="mt-5">
          <h4 className="mb-3">Professional Experience</h4>

          <div className="glass lift p-4 rounded-4">
            <h5 className="fw-semibold">Management Trainee – Java Developer</h5>
            <p className="text-muted mb-1">
              CRANE GLOBAL SOLUTIONS LIMITED  
              <br />
              Hyderabad, India • Jan 2025 – Present
            </p>

            <ul className="mt-3">
              <li>
                Working on <strong>Neura 6</strong>, a hospital and medical management web application
                used for patient records, billing, appointments, and pharmacy workflows.
              </li>
              <li>
                Developing backend modules using <strong>Java, Spring Boot</strong> and front-end features
                using <strong>HTML, CSS, JavaScript</strong>.
              </li>
              <li>
                Designing and implementing <strong>RESTful APIs</strong> for smooth communication between
                front-end and backend systems.
              </li>
              <li>
                Performing <strong>unit testing</strong> and debugging to ensure reliability and code quality.
              </li>
              <li>
                Using <strong>Postman</strong> to validate API endpoints and backend responses.
              </li>
              <li>
                Integrating backend features with <strong>IBM Informix</strong> for secure and efficient
                data handling.
              </li>
              <li>
                Collaborating with cross-functional teams under an <strong>Agile</strong> environment
                to deliver features and improve system performance.
              </li>
              <li>
                Enhancing UI usability by improving front-end design and responsiveness.
              </li>
            </ul>

            <p className="text-primary mt-2">
              Java • Spring Boot • REST APIs • HTML • CSS • JS • IBM Informix • Postman • Agile
            </p>
          </div>
        </div>

        {/* EDUCATION */}
        <div className="mt-5">
          <h4 className="mb-3">Education</h4>

          <div className="glass lift p-4 rounded-4">
            <h5 className="fw-semibold">
              Bachelor of Technology (B.Tech) – Electronics & Communication Engineering
            </h5>
            <p className="text-muted mb-1">
              Miracle Educational Society Group of Institutions  
              <br />
              Vizianagaram, India • 2020 – 2024
            </p>
            <p className="mt-2">
              CGPA: <strong>7.5</strong>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Experience;
