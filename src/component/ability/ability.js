import React from "react";
import react from "../../imagens/react.png";
import typescript from "../../imagens/typescript.png";
import javascript from "../../imagens/javascript.png";
import css from "../../imagens/css3.png";
import html from "../../imagens/html5.png";
import tailwind from "../../imagens/tailwind.png";
import git from "../../imagens/git.png";
import "./ability.css";
import NavBar from "../Topo";

export default function Ability() {
  return (
    <div className="background container-max">
      <NavBar />
      <div className="ability-con">
        <h1>Habilidades</h1>
        <div className="ability-img">
          <img src={react} alt="Logo React" title="React" />
          <img src={typescript} alt="Logo TypeScript" title="TypeScript" />
          <img src={javascript} alt="Logo JavaScript" title="JavaScript" />
          <img src={css} alt="Logo CSS3" title="CSS3" />
          <img src={html} alt="Logo HTML5" title="HTML5" />
          <img src={tailwind} alt="Logo Tailwind CSS" title="Tailwind CSS" />
          <img src={git} alt="logo git" title="git" />
        </div>
      </div>
    </div>
  );
}
