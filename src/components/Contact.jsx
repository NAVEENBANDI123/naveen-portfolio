import { useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qfhyfua",       // ✅ your Service ID
        "template_i4ypccb",      // ✅ your Template ID
        e.target,
        "fdXAq8JIVcWc7CcKP"          // ✅ your Public Key
      )
      .then(
        () => {
          setStatus("SUCCESS");
          e.target.reset();
        },
        () => {
          setStatus("ERROR");
        }
      );
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <h2 className="section-title gradient-text">Contact</h2>

        <form className="mt-4" onSubmit={sendEmail}>
          <div className="mb-3">
            <input
              type="text"
              name="from_name"
              className="form-control"
              placeholder="Your Name"
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="email"
              name="from_email"
              className="form-control"
              placeholder="Email"
              required
            />
          </div>

          <div className="mb-3">
            <textarea
              name="message"
              className="form-control"
              rows={4}
              placeholder="Message"
              required
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>

        {status === "SUCCESS" && (
          <p className="text-success mt-3">
            ✅ Message sent successfully!
          </p>
        )}

        {status === "ERROR" && (
          <p className="text-danger mt-3">
            ❌ Something went wrong. Please try again.
          </p>
        )}

        <div className="mt-5 d-flex flex-column flex-md-row gap-4 align-items-start">

  {/* GitHub */}
  <a
    href="https://github.com/NAVEENBANDI123"
    target="_blank"
    rel="noreferrer"
    className="contact-item"
  >
    <i className="bi bi-github"></i>
    {/* <span>github.com/NAVEENBANDI123</span> */}
  </a>

  {/* LinkedIn */}
  <a
    href="https://in.linkedin.com/in/naveen-bandi-852136237"
    target="_blank"
    rel="noreferrer"
    className="contact-item"
  >
    <i className="bi bi-linkedin"></i>
    {/* <span>linkedin.com/in/naveen-bandi</span> */}
  </a>

  {/* Email */}
  <a
    href="mailto:naveenbandi62@gmail.com"
    className="contact-item"
  >
    <i className="bi bi-envelope-fill"></i>
    <span>naveenbandi62@gmail.com</span>
  </a>

  {/* Phone */}
  <a
    href="tel:+916301270852"
    className="contact-item"
  >
    <i className="bi bi-telephone-fill"></i>
    <span>+91 6301270852</span>
  </a>

</div>
      </div>
    </section>
  );
}

export default Contact;




// function Contact() {
//   return (
//     <section id="contact" className="section-padding">
//       <div className="container">
//         <h2 className="section-title">Contact</h2>

//         <form
//           className="mt-4"
//           action="https://formspree.io/f/xdkrebpe"
//           method="POST"
//         >
//           <div className="mb-3">
//             <input
//               type="text"
//               name="name"
//               className="form-control"
//               placeholder="Your Name"
//               required
//             />
//           </div>

//           <div className="mb-3">
//             <input
//               type="email"
//               name="email"
//               className="form-control"
//               placeholder="Email"
//               required
//             />
//           </div>

//           <div className="mb-3">
//             <textarea
//               name="message"
//               className="form-control"
//               rows={4}
//               placeholder="Message"
//               required
//             ></textarea>
//           </div>

//           <button type="submit" className="btn btn-primary">
//             Send Message
//           </button>
//         </form>

//         <div className="mt-4">
//           <a
//             className="me-3"
//             href="https://github.com/NAVEENBANDI123"
//             target="_blank"
//             rel="noreferrer"
//           >
//             GitHub
//           </a>

//           <a
//             href="https://in.linkedin.com/in/naveen-bandi-852136237"
//             target="_blank"
//             rel="noreferrer"
//           >
//             LinkedIn
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Contact;
