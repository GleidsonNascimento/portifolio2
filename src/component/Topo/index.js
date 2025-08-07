import React, { useState, useEffect } from "react";
import gitMoon from "../../imagens/github-moon.png";
import gitSun from "../../imagens/github-sun.png";
import linkMoon from "../../imagens/linkedin-moon.png";
import linkSun from "../../imagens/linkedin-sun.png";
import xMoon from "../../imagens/x-moon.png";
import xSun from "../../imagens/x-sun.png";
import moon from "../../imagens/moon.svg";
import sun from "../../imagens/sun.svg";
import usermoon from "../../imagens/user-moon.png";
import usersun from "../../imagens/user-sun.png";
import { useTheme } from "../contextProjet.js/contextTheme";

import "./index.css";

export default function NavBar({
  showAbout,
  setShowAbout,
  setActiveSection,
  activeSection,
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
      if (id === "home-section") {
        setShowAbout(false);
      }
      setActiveSection(id);
    }
  };

  const handleToggleAbout = () => {
    setShowAbout(!showAbout);
  };

  return (
    <div>
      <header className="navbar color-universal">
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span className={`bar top ${menuOpen ? "open" : ""}`}></span>
          <span className={`bar middle ${menuOpen ? "open" : ""}`}></span>
          <span className={`bar bottom ${menuOpen ? "open" : ""}`}></span>
        </div>
        <div
          className={`navbar-links color-universal ${menuOpen ? "active" : ""}`}
        >
          <p>
            <a
              data-section="home-section"
              onClick={() => scrollToSection("home-section")}
              className={`nav-link ${
                activeSection === "home-section" ? "active" : ""
              }`}
            >
              Home
            </a>
          </p>
          <p>
            <a
              data-section="ability-section"
              onClick={() => scrollToSection("ability-section")}
              className={`nav-link ${
                activeSection === "ability-section" ? "active" : ""
              }`}
            >
              Habilidades
            </a>
          </p>
          <p>
            <a
              data-section="projects-section"
              onClick={() => scrollToSection("projects-section")}
              className={`nav-link ${
                activeSection === "projects-section" ? "active" : ""
              }`}
            >
              Projetos
            </a>
          </p>
          <p>
            <a
              data-section="email-section"
              onClick={() => scrollToSection("email-section")}
              className={`nav-link ${
                activeSection === "email-section" ? "active" : ""
              }`}
            >
              Entre em contato
            </a>
          </p>
        </div>

        <div>
          <img
            className={`card ${showAbout ? "card--spin" : ""}`}
            src={theme === "dark" ? usermoon : usersun}
            alt="Identificação"
            onClick={handleToggleAbout}
          />
        </div>

        <div className="theme">
          <button className={`toggle-theme-btn ${theme}`} onClick={toggleTheme}>
            <span className="toggle-thumb">
              <img src={theme === "light" ? sun : moon} alt="Ícone tema" />
            </span>
          </button>
        </div>
      </header>

      <div className="sidebar color-universal">
        <footer>
          <p>
            <a
              href="https://www.linkedin.com/in/gleidson-guimar%C3%A3es-b927b2254/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={theme === "dark" ? linkMoon : linkSun} alt="LinkedIn" />
            </a>
          </p>
          <p>
            <a
              href="https://github.com/GleidsonNascimento?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={theme === "dark" ? gitMoon : gitSun} alt="GitHub" />
            </a>
          </p>
          <p>
            <a
              href="https://twitter.com/AlguemGleidson"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={theme === "dark" ? xSun : xMoon} alt="Twitter" />
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
