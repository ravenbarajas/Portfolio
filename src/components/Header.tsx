import { useState } from 'react';
import darkModeIcon from "../assets/lightMode.png"; // Import the dark mode PNG icon
import lightModeIcon from "../assets/darkMode.png"; // Import the light mode PNG icon

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode'); // Toggle a class on the body
  };

  return (
    <header className={`header ${darkMode ? 'dark-mode' : ''}`}>
      <div className="container header-container">

        <div className="social-links">
          <button style={{marginLeft: '10px', backgroundColor: 'transparent', border: 'none', padding: 0, cursor: 'pointer'}} onClick={toggleDarkMode}>
            <img
              src={darkMode ? lightModeIcon : darkModeIcon}
              alt={darkMode ? "Light Mode" : "Dark Mode"}
              style={{ width: '24px', height: '24px' }} // Adjust size as needed
            />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header

