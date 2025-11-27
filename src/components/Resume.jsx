function Resume() {
  return (
    <section id="resume" className="section-padding bg-dark text-light text-center">
      <div className="container">
        <h2 className="section-title">Resume</h2>
        <p className="mt-3">Download my resume to know more about my experience.</p>
        <a href="/resume.pdf" className="btn btn-primary mt-3" download>
          Download Resume
        </a>
      </div>
    </section>
  );
}

export default Resume;
