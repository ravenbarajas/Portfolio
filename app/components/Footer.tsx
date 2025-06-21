import { Github } from '../../src/components/icons/Github';
import { Linkedin } from '../../src/components/icons/Linkedin';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-logo">
          <div className="logo">
            <span>RB</span>
          </div>
        </div>
        <p className="copyright">&copy; 2023 My Portfolio</p>
        <div className="footer-social">
          <a href="#" aria-label="GitHub profile" target="_blank" rel="noopener noreferrer">
            <Github />
          </a>
          <a href="#" aria-label="LinkedIn profile" target="_blank" rel="noopener noreferrer">
            <Linkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 