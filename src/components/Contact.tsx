import { Email } from "./icons/Email"
import { Linkedin } from "./icons/Linkedin"
import { Github } from "./icons/Github"

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2>Get In Touch</h2>
        <p className="section-subtitle">Let's discuss your project or opportunity</p>

        <div className="contact-container">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <ul className="contact-list">
              <li>
                <Email />
                <a href="mailto:ravenbarajas2001@gmail.com">ravenbarajas2001@gmail.com</a>
              </li>
              <li>
                <Linkedin />
                <a href="https://www.linkedin.com/in/barajasraven/">linkedin.com/in/barajasraven</a>
              </li>
              <li>
                <Github />
                <a href="https://github.com/ravenbarajas">github.com/ravenbarajas</a>
              </li>
            </ul>
          </div>

          <div className="contact-form-container">
            <h3>Send a Message</h3>
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Your name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Your email" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows={5} placeholder="Your message"></textarea>
              </div>
              <button type="submit" className="button button-primary button-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

