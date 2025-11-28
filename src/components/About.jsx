import { useEffect, useRef } from "react";

function About() {
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          aboutRef.current.classList.add("show");
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(aboutRef.current);
  }, []);

  return (
    <section
      id="about"
      ref={aboutRef}
      className="section-padding fade-section"
    >
      <div className="container">
        <h2 className="section-title slide-down">About Me</h2>

        <p className="section-subtitle fade-in-delay">
          Java backend developer with strong fundamentals and real-world project experience.
        </p>

        {/* 🔥 Animated Highlights */}
        <div className="about-highlights mt-4">
          <span className="highlight-pill">Java & Spring Boot</span>
          {/* <span className="highlight-pill">REST APIs</span>
          <span className="highlight-pill">Enterprise Healthcare Apps</span>
          <span className="highlight-pill">IBM Informix</span>
          <span className="highlight-pill">Agile Team Experience</span> */}
        </div>

        <p className="mt-4">
          I am a <strong>Java / Spring Boot Developer</strong> with nearly
          <strong> 1 year of hands-on professional experience</strong> working on
          enterprise-level applications. My primary expertise lies in building
          reliable and scalable backend services.
        </p>

        <p>
          In addition to backend development, I have practical experience with
          <strong> HTML, CSS, and JavaScript</strong> and basic working knowledge
          of <strong> React.js and Node.js</strong>, enabling me to collaborate
          effectively on full-stack features.
        </p>
      </div>
    </section>
  );
}

export default About;
