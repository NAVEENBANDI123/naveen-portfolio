import { useState } from "react";

import javaLogo from "../assets/skills/java1.svg";
import springLogo from "../assets/skills/springboot.svg";
import htmlLogo from "../assets/skills/html.svg";
import cssLogo from "../assets/skills/css.svg";
import jsLogo from "../assets/skills/javascript.svg";
import sqlLogo from "../assets/skills/sql.svg";
import gitLogo from "../assets/skills/git1.svg";
import githubLogo from "../assets/skills/github1.svg";
import postmanLogo from "../assets/skills/postman1.svg";
import vscodeLogo from "../assets/skills/vscode1.svg";
import eclipseLogo from "../assets/skills/eclipse1.svg";
import reactLogo from "../assets/skills/react.svg";
import nodejsLogo from "../assets/skills/nodejs.svg";

function Skills() {
  const [activeSkill, setActiveSkill] = useState(null);

  return (
    <section id="skills" className="section-padding bg-dark text-light">
      <div className="container">
        <h2 className="section-title gradient-text">Skills</h2>
        <p className="section-subtitle">
          Click on a skill to see my proficiency.
        </p>

        <div className="row mt-5 g-4">

          <SkillBox title="Frontend">
            <SkillPill
              logo={htmlLogo}
              name="HTML"
              description="HTML is used to create clean, semantic, and structured layouts as part of frontend development."
          onClick={setActiveSkill}
            />
            <SkillPill
              logo={cssLogo}
              name="CSS"
              experience="1+ year"
             description="I use CSS to style applications, handle layouts, and ensure responsive and visually clear user interfaces."
          onClick={setActiveSkill}
            />
            <SkillPill
              logo={jsLogo}
              name="JavaScript"
              description="JavaScript is used to implement client-side logic and enhance interactivity within web applications."
              onClick={setActiveSkill}
            />
            <SkillPill
              logo={reactLogo}
              name="React.js"
              experience="Basic"
              description="I use React.js to build modular UI components, manage component state, and create interactive user interfaces using JavaScript."
              onClick={setActiveSkill}
            />
          </SkillBox>

          <SkillBox title="Backend">
           <SkillPill
          logo={javaLogo}
          name="Java"
          description="Java is my primary backend language and is used extensively for building and maintaining application features in enterprise systems."
          onClick={setActiveSkill}
          />
            <SkillPill
              logo={springLogo}
              name="Spring Boot"
              description="I use Spring Boot to develop RESTful services and backend modules with a focus on clean structure and reliability."
              onClick={setActiveSkill}
            />
            <SkillPill
              logo={nodejsLogo}
              name="Node.js"
              experience="Basic"
               description="Currently learning Node.js to understand server-side JavaScript concepts and API development fundamentals."
              onClick={setActiveSkill}
            />
            <SkillPill
              logo={sqlLogo}
              name="SQL / Informix"
              description="I work comfortably with SQL and IBM Informix to retrieve, validate, and manage application data in backend workflows."
              onClick={setActiveSkill}
            />
          </SkillBox>

          <SkillBox title="Tools">
            <SkillPill
              logo={gitLogo}
              name="Git"
             description="Git is used regularly for version control, feature development, and collaboration within a team environment."
              onClick={setActiveSkill}
            />
            <SkillPill
              logo={githubLogo}
              name="GitHub"
              description="I use GitHub for repository management, code reviews, and maintaining project version history."
              onClick={setActiveSkill}
            />
            <SkillPill
              logo={postmanLogo}
              name="Postman"
              description="Postman is an essential tool I use to test, validate, and debug REST API endpoints during development."
              onClick={setActiveSkill}
            />
            <SkillPill
              logo={vscodeLogo}
              name="VS Code"
              description="VS Code is my primary development environment for writing, debugging, and managing frontend and backend code."
              onClick={setActiveSkill}
            />
            <SkillPill
              logo={eclipseLogo}
              name="Eclipse / STS"
             description="Eclipse / Spring Tool Suite is used extensively for Java and Spring-based development in enterprise projects."
              onClick={setActiveSkill}
            />
          </SkillBox>

        </div>

        {activeSkill && (
          <SkillModal skill={activeSkill} onClose={() => setActiveSkill(null)} />
        )}

      </div>
    </section>
  );
}

function SkillBox({ title, children }) {
  return (
    <div className="col-md-6 col-lg-4">
      <div className="skill-box glass lift reveal">
        <h5 className="skill-box-title">{title}</h5>
        <div className="skill-pill-group">{children}</div>
      </div>
    </div>
  );
}

function SkillPill({ logo, name, description, onClick }) {
  return (
    <div
      className="skill-pill clickable"
      onClick={() => onClick({ logo, name, description })}
    >
      <img src={logo} alt={name} />
      <span>{name}</span>
    </div>
  );
}

function SkillModal({ skill, onClose }) {
  return (
    <div className="skill-modal-backdrop" onClick={onClose}>
      <div className="skill-modal glass" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <img src={skill.logo} alt={skill.name} />
        <h4>{skill.name}</h4>
        <p>
          {skill.description}
        </p>
      </div>
    </div>
  );
}

export default Skills;




// import javaLogo from "../assets/skills/java.svg";
// import springLogo from "../assets/skills/spring.svg";
// import htmlLogo from "../assets/skills/html.svg";
// import cssLogo from "../assets/skills/css.svg";
// import jsLogo from "../assets/skills/javascript.svg";
// import sqlLogo from "../assets/skills/sql.svg";
// import gitLogo from "../assets/skills/git.svg";
// import githubLogo from "../assets/skills/github.svg";
// import postmanLogo from "../assets/skills/postman.svg";
// import vscodeLogo from "../assets/skills/vscode.svg";
// import eclipseLogo from "../assets/skills/eclipse.svg";

// function Skills() {
//   return (
//     <section id="skills" className="section-padding bg-dark text-light">
//       <div className="container">
//         <h2 className="section-title gradient-text">Skills</h2>
//         <p className="section-subtitle">
//           Technologies and tools I use in real-world development.
//         </p>

//         <div className="row mt-5 g-4">

//           {/* Backend */}
//           <div className="col-md-4">
//             <div className="glass lift p-4 rounded-4 reveal">
//               <h5 className="mb-3">Backend</h5>
//               <div className="skill-logo-grid">
//                 <Skill logo={javaLogo} name="Java" />
//                 <Skill logo={springLogo} name="Spring Boot" />
//                 <Skill logo={sqlLogo}name="SQL / Informix" />
//               </div>
//             </div>
//           </div>

//           {/* Frontend */}
//           <div className="col-md-4">
//             <div className="glass lift p-4 rounded-4 reveal">
//               <h5 className="mb-3">Frontend</h5>
//               <div className="skill-logo-grid">
//                 <Skill logo={htmlLogo} name="HTML" />
//                 <Skill logo={cssLogo} name="CSS" />
//                 <Skill logo={jsLogo} name="JavaScript" />
//               </div>
//             </div>
//           </div>

//           {/* Tools */}
//           <div className="col-md-4">
//             <div className="glass lift p-4 rounded-4 reveal">
//               <h5 className="mb-3">Tools</h5>
//               <div className="skill-logo-grid">
//                 <Skill logo={gitLogo} name="Git" />
//                 <Skill logo={githubLogo} name="GitHub" />
//                 <Skill logo={postmanLogo} name="Postman" />
//                 <Skill logo={vscodeLogo} name="VS Code" />
//                 <Skill logo={eclipseLogo} name="Eclipse / STS" />
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

// function Skill({ logo, name }) {
//   return (
//     <div className="skill-logo-item">
//       <img src={logo} alt={name} />
//       {/* <span>{name}</span> */}
//     </div>
//   );
// }

// export default Skills;
