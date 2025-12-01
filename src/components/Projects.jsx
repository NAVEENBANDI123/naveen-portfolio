import { useEffect, useRef } from "react";

function Projects() {
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
      id="projects"
      className="section-padding fade-section"
    >
      <div className="container">
        <h2 className="section-title gradient-text slide-down">
          Projects
        </h2>
        <p className="section-subtitle fade-in-delay">
          Academic and professional projects demonstrating backend and web development skills.
        </p>

        <div className="row mt-5 g-4">

          {/* PROJECT 1 */}
<div className="col-md-6">
  <div
    className="project-card glass lift p-4 h-100 rounded-4 fade-card"
    ref={(el) => (cardRefs.current[0] = el)}
  >
    <h5 className="fw-semibold">
      ATM Simulation Application
    </h5>

    <p className="text-muted mt-3">
      Developed a Java-based ATM simulation application with a
      simple web-based user interface to replicate core banking
      operations such as user authentication, balance inquiry,
      cash withdrawal, deposit, and password recovery.
    </p>

    <ul className="small text-muted mt-3">
      <li>Designed basic UI screens using HTML and CSS</li>
      <li>Implemented client-side interactions using JavaScript</li>
      <li>Developed backend logic in Java for transaction workflows</li>
      <li>Used MySQL for secure storage of user and transaction data</li>
      <li>Handled validations, exceptions, and edge cases</li>
    </ul>

    <p className="text-primary small mt-3">
      Java • MySQL • JDBC • HTML • CSS • JavaScript
    </p>
  </div>
</div>

{/* PROJECT 2 */}
<div className="col-md-6">
  <div
    className="project-card glass lift p-4 h-100 rounded-4 fade-card"
    ref={(el) => (cardRefs.current[1] = el)}
  >
    <h5 className="fw-semibold">
      Neura 6 – Hospital Management Web Application
    </h5>

    <p className="text-muted mt-3">
      Contributed to the development of <strong>Neura 6</strong>, an
      enterprise-level hospital and medical management web application,
      as part of a professional development team at
      <strong> Crane Global Solutions Limited</strong>.
    </p>

    <ul className="small text-muted mt-3">
      <li>Developed backend modules using Java and Spring Boot</li>
      <li>Designed and tested RESTful APIs for frontend integration</li>
      <li>Integrated APIs with IBM Informix database</li>
      <li>Validated API functionality using Postman</li>
      <li>Improved frontend UI responsiveness using HTML, CSS, and JavaScript</li>
    </ul>

    <p className="text-primary small mt-3">
      Java • Spring Boot • REST APIs • IBM Informix • HTML • CSS • JavaScript • Postman
    </p>
  </div>
</div>


        </div>
      </div>
    </section>
  );
}

export default Projects;



// function Projects() {
//   return (
//     <section id="projects" className="section-padding">
//       <div className="container">
//         <h2 className="section-title gradient-text">Projects</h2>
//         <p className="section-subtitle">
//           Key modules and systems developed as part of enterprise healthcare applications.
//         </p>

//         <div className="row mt-5 g-4">
//           {/* PROJECT 1 */}
//           <div className="col-md-4">
//             <div className="project-card glass lift p-4 h-100 rounded-4">
//               <h5 className="fw-semibold">
//                 Hospital Certificate Generation System
//               </h5>

//               <p className="text-muted mt-3">
//                 Developed a backend-driven module to generate official hospital
//                 certificates such as <strong>Death Certificates</strong> and
//                 <strong> Medico-Legal Case (MLC)</strong> intimations within
//                 the Neura healthcare platform.
//               </p>

//               <ul className="small text-muted mt-3">
//                 <li>Implemented JSP-based certificate templates</li>
//                 <li>Integrated backend validation using Java & Spring</li>
//                 <li>Fetched and formatted patient data from Informix DB</li>
//               </ul>

//               <p className="text-primary small mt-3">
//                 Java • Spring • JSP • IBM Informix • SQL
//               </p>
//             </div>
//           </div>

//           {/* PROJECT 2 */}
//           <div className="col-md-4">
//             <div className="project-card glass lift p-4 h-100 rounded-4">
//               <h5 className="fw-semibold">
//                 Patient & Episode Management Module
//               </h5>

//               <p className="text-muted mt-3">
//                 Worked on core backend logic for managing patient records,
//                 visits, episodes, and clinical service workflows in
//                 a hospital management system.
//               </p>

//               <ul className="small text-muted mt-3">
//                 <li>Handled patient demographics and episode tracking</li>
//                 <li>Optimized SQL queries for faster data retrieval</li>
//                 <li>Integrated JSP views with backend services</li>
//               </ul>

//               <p className="text-primary small mt-3">
//                 Java • JSP • Spring • SQL • Bootstrap
//               </p>
//             </div>
//           </div>

//           {/* PROJECT 3 */}
//           <div className="col-md-4">
//             <div className="project-card glass lift p-4 h-100 rounded-4">
//               <h5 className="fw-semibold">
//                 Neura 6 Web Application Enhancement
//               </h5>

//               <p className="text-muted mt-3">
//                 Contributed to enhancing UI usability and backend stability
//                 of <strong>Neura 6</strong>, a large-scale healthcare web
//                 application used for patient management, billing,
//                 pharmacy, and appointments.
//               </p>

//               <ul className="small text-muted mt-3">
//                 <li>Developed and tested REST APIs using Spring Boot</li>
//                 <li>Validated APIs using Postman</li>
//                 <li>Improved frontend responsiveness using HTML & CSS</li>
//               </ul>

//               <p className="text-primary small mt-3">
//                 Spring Boot • REST APIs • Java • HTML • CSS • JavaScript • Postman
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Projects;
