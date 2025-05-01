"use client"

import { useState, useEffect } from 'react';
import "../../styles/ui/ThemeToggle.css"

interface ThemeToggleProps {
  darkMode: boolean
  toggleTheme: () => void
}

const ThemeToggle = ({ darkMode, toggleTheme }: ThemeToggleProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <button
      className={`theme-toggle ${mounted ? 'mounted' : ''}`}
      onClick={toggleTheme}
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      <div className="theme-toggle-icon">
        {darkMode ? (
          <div className="moon">
            <div className="moon-crater"></div>
            <div className="moon-crater"></div>
            <div className="moon-crater"></div>
          </div>
        ) : (
          <div className="sun">
            <div className="sun-ray"></div>
            <div className="sun-ray"></div>
            <div className="sun-ray"></div>
            <div className="sun-ray"></div>
            <div className="sun-ray"></div>
            <div className="sun-ray"></div>
            <div className="sun-ray"></div>
            <div className="sun-ray"></div>
          </div>
        )}
      </div>
    </button>
  )
}

export default ThemeToggle

