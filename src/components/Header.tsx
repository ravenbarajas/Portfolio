import { useState, useEffect } from 'react';
import ThemeToggle from './ui/ThemeToggle';
import "../styles/ui/ThemeToggle.css";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Check for saved dark mode preference on mount
  useEffect(() => {
    const isDarkMode = document.body.classList.contains('dark-mode');
    setDarkMode(isDarkMode);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <header className={`header ${darkMode ? 'dark-mode' : ''}`}>
      <div className="container header-container">
        <div className="logo">
          <span>RB</span>
        </div>

        <nav className="nav">
          <ul className="nav-list">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        <div className="theme-toggle-container">
          <ThemeToggle darkMode={darkMode} toggleTheme={toggleDarkMode} />
        </div>
      </div>
    </header>
  );
};

export default Header;

