import { useEffect, useRef } from "react";

function Experience() {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    cardRefs.current.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="section-padding bg-dark text-light fade-section"
    >
      <div className="container">

        <h2 className="section-title gradient-text slide-down">
          Experience & Education
        </h2>

        {/* PROFESSIONAL EXPERIENCE */}
        <div className="mt-5">
          <h4 className="mb-3 fade-in-delay">Professional Experience</h4>

          <div
            className="glass lift p-4 rounded-4 fade-card"
            ref={(el) => (cardRefs.current[0] = el)}
          >
            <h5 className="fw-semibold">Management Trainee – Java</h5>
            <p className="text-muted mb-1">
              CRANE GLOBAL SOLUTIONS LIMITED  
              <br />
              Hyderabad, India • Jan 2025 – Present
            </p>

            <ul className="mt-3">
              <li>Working as a Java developer in an enterprise healthcare domain environment.</li>
              <li>Developing and maintaining server-side components using <strong>Java and Spring Boot</strong>.</li>
              <li>Creating and consuming <strong>RESTful APIs</strong>.</li>
              <li>Integrating backend services with <strong>IBM Informix</strong> databases.</li>
              <li>Performing <strong>unit testing and debugging</strong> to ensure code quality.</li>
              {/* <li>Collaborating in an <strong>Agile development environment</strong>.</li> */}
              <li>Using <strong>Postman</strong> for API testing and validation.</li>
              <li>Supporting UI enhancements using <strong>HTML, CSS, and JavaScript</strong>.</li>
            </ul>

            <p className="text-primary mt-2">
              Java • Spring Boot • REST APIs • HTML • CSS • JavaScript • IBM Informix • Postman 
            </p>
          </div>
        </div>

        {/* EDUCATION */}
        <div className="mt-5">
          <h4 className="mb-3 fade-in-delay">Education</h4>

          <div
            className="glass lift p-4 rounded-4 fade-card"
            ref={(el) => (cardRefs.current[1] = el)}
          >
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
