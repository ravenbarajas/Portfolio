import { Github } from "./icons/Github"
import { Linkedin } from "./icons/Linkedin"

const Header = () => {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
        </div>

        <nav className="nav">
          <ul className="nav-list">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>

        <div className="social-links">
          <a href="#" aria-label="Github">
            <Github />
          </a>
          <a href="#" aria-label="LinkedIn">
            <Linkedin />
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header

