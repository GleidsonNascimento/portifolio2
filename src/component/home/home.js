import React, { useState, useEffect } from "react";
import NavBar from "../Topo";
import "./home.css";
import Banner from "../about/banner";
import MainPage from "../ability/mainContent";
import { useSectionObserver, useTheme } from "../contextProjet.js/contextTheme";

export default function Home({ id }) {
  const { theme } = useTheme();
  const [showAbout, setShowAbout] = useState(false);
  const [activeSection, setActiveSection] = useState("home-section");

  useSectionObserver(setActiveSection);

  return (
    <div className={`app ${theme}`}>
      <NavBar
        showAbout={showAbout}
        setShowAbout={setShowAbout}
        setActiveSection={setActiveSection}
        activeSection={activeSection}
      />

      <section id="home-section">
        <Banner showAbout={showAbout} setShowAbout={setShowAbout} />
      </section>

      <MainPage />
    </div>
  );
}
