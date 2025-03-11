import { Clock } from "./icons/Clock"
import { Github } from "./icons/Github"
import { Linkedin } from "./icons/Linkedin"
import { Email } from "./icons/Email"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-logo">
          <Clock />
          <span>Raven Barajas | AI/ML Engineer</span>
        </div>

        <div className="copyright">© {currentYear} Raven Barajas. All rights reserved.</div>

        <div className="footer-social">
          <a href="#" aria-label="Github">
            <Github />
          </a>
          <a href="#" aria-label="LinkedIn">
            <Linkedin />
          </a>
          <a href="#" aria-label="Email">
            <Email />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

