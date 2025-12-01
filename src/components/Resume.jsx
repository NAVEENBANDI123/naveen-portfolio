function Resume() {
  const resumeUrl = `${import.meta.env.BASE_URL}Bandi_Naveen_Java_SpringBoot_Backend_Developer_Resume.pdf`;

  return (
    <section
      id="resume"
      className="section-padding bg-dark text-light text-center fade-in-up"
    >
      <div className="container">
        <h2 className="section-title slide-down">Resume</h2>

        <p className="mt-3 fade-in-delay">
          View or download my resume to know more about my experience.
        </p>

        <div className="d-flex justify-content-center gap-3 mt-4 fade-in-delay">
          {/* View Resume */}
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-light pulse-btn"
          >
            View Resume
          </a>

          {/* Download Resume */}
          <a
            href={resumeUrl}
            download
            className="btn btn-primary pulse-btn"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Resume;


// function Resume() {
//   return (
//     <section
//       id="resume"
//       className="section-padding bg-dark text-light text-center fade-in-up"
//     >
//       <div className="container">
//         <h2 className="section-title slide-down">Resume</h2>
//         <p className="mt-3 fade-in-delay">
//           Download my resume to know more about my experience.
//         </p>
//         <a
//   href={`${import.meta.env.BASE_URL}Bandi_Naveen_Java_SpringBoot_Backend_Developer_Resume.pdf`}
//   className="btn btn-primary mt-3 pulse-btn"
//   download
// >
//           Download Resume
//         </a>
//       </div>
//     </section>
//   );
// }

// export default Resume;
