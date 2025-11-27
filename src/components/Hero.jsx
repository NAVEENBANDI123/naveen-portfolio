function Hero() {
  return (
    <section id="home" className="hero section-padding text-light">
      <div className="container text-center">
        <h1 className="display-5 fw-bold gradient-text neon-underline">
  Hi, I’m Naveen Bandi
        </h1>

        <p className="lead mt-3">
          Java / Spring Boot Developer
        </p>

        <p className="text-muted mt-2">
          Backend-focused fresher with 1 year of real-world experience
        </p>

        <div className="mt-4">
          <a href="#projects" className="btn btn-primary me-3">
            View Projects
          </a>
          <a href="/resume.pdf" className="btn btn-outline-light">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
