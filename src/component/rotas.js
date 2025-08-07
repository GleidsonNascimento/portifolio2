import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider as ProjectProvider } from "./contextProjet.js/contextProject";
import { ThemeProvider } from "./contextProjet.js/contextTheme";
import Home from "./home/home";
import Project from "./project/project";
import Projects from "./projects";
import MainPage from "./ability/mainContent";
import Abilitys from "./ability/habilidades";

export default function Rotas() {
  return (
    <div>
      <BrowserRouter>
        <ThemeProvider>
          <ProjectProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/project/:id" element={<Project />} />
              <Route path="/content" element={<MainPage />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/abilitys" element={<Abilitys />} />
            </Routes>
          </ProjectProvider>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}
