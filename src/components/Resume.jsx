function Resume() {
  return (
    <section
      id="resume"
      className="section-padding bg-dark text-light text-center fade-in-up"
    >
      <div className="container">
        <h2 className="section-title slide-down">Resume</h2>
        <p className="mt-3 fade-in-delay">
          Download my resume to know more about my experience.
        </p>
        <a
  href={`${import.meta.env.BASE_URL}resume.pdf`}
  className="btn btn-primary mt-3 pulse-btn"
  download
>
          Download Resume
        </a>
      </div>
    </section>
  );
}

export default Resume;
