import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PortifolioContext, Provider } from "./contextProjet.js/contextProject";
import Home from "./home/home";
import Project from "./project/project";
import Ability from "./ability/ability";
import Projects from "./projects";

export default function Rotas() {
  return (
    <div>
      <BrowserRouter>
        <Provider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<Project />} />
            <Route path="/ability" element={<Ability />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  );
}
