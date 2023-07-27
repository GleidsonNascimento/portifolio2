import React, { useState } from "react";
import react from "../../imagens/react.png";
import typescript from "../../imagens/typescript.png";
import javascript from "../../imagens/javascript.png";
import css from "../../imagens/css3.png";
import html from "../../imagens/html5.png";
import tailwind from "../../imagens/tailwind.png";
import git from "../../imagens/git.png";
import "./ability.css";
import NavBar from "../Topo";

const technologyDescriptions = {
  react:
    "Há 9 meses, iniciei meus estudos em React, o framework JavaScript para construção de interfaces de usuário. Durante esse período, tenho me dedicado a aprender seus conceitos e a utilizar suas bibliotecas para criar aplicações web interativas. Estou confiante em minha habilidade de desenvolver componentes reutilizáveis e responsivos. Pretendo continuar aprimorando minhas habilidades e enfrentando novos desafios nessa área de programação.",
  typescript:
    "Eu comecei a aprender TypeScript há alguns meses. TypeScript é uma linguagem de programação que funciona junto com o JavaScript e me ajuda a escrever código mais organizado e seguro. Eu estou gostando de aprender os conceitos e as vantagens que o TypeScript tem para fazer aplicativos. Eu estou conseguindo escrever código mais fácil de entender e de corrigir. Meu objetivo é continuar melhorando minhas habilidades em TypeScript, usando seus benefícios para fazer código de qualidade e fácil de manter.",
  javascript:
    "Desde o ano passado, eu tenho me dedicado a aprender e a usar o JavaScript. Essa é uma linguagem de programação muito poderosa e flexivel, que me permite fazer muitas coisas legais na internet. Eu aprendi a criar sites e aplicativos que são interativos e dinâmicos, usando os recursos e as estruturas do JavaScript. Eu também conheci algumas ferramentas famosas, como o React, que me ajudaram a melhorar minhas habilidades e a seguir as melhores práticas de desenvolvimento. Eu estou muito feliz com o que eu consegui fazer até agora e quero continuar aprendendo e me desafiando no mundo da programação.",
  css: "Desde 17 meses atrás quando comecei aprender junto com HTML foi uma das partes que mais me encantou, como ex design achei divertido vê o CSS tomando forma e cores com o CSS",
  html: "Comecei aprender 17 meses atrás comecei aprender HTML na prática básica da escrita de código, tenho muito a melhora, mas tenho foco para melhora a forma que estruturo as minhas linhas de código",
  tailwind:
    "Tenho aprendido a ferramenta pra facilitar meu uso do CSS e agilidade nas minhas necessidades",
  git: "Tenho aprendido como utilizar o git tem pouco mais de um ano, tenho confiança em usar no uso diario do trabalho para fazer as atualizações e modificações no repositorios",
};

export default function Ability() {
  const [currentTechnology, setCurrentTechnology] = useState("react");
  const [selectedTechnology, setSelectedTechnology] = useState("react");

  const handleTechnologyClick = (technology) => {
    setCurrentTechnology(technology);
    setSelectedTechnology(technology);
  };

  return (
    <div className="background container-max">
      <NavBar />
      <div className="ability-con">
        <h2>Habilidades</h2>
        <div className="ability-img">
          <img
            src={react}
            alt="Logo React"
            title="React"
            onClick={() => handleTechnologyClick("react")}
            className={currentTechnology === "react" ? "selected" : ""}
          />
          <img
            src={typescript}
            alt="Logo TypeScript"
            title="TypeScript"
            onClick={() => handleTechnologyClick("typescript")}
            className={currentTechnology === "typescript" ? "selected" : ""}
          />
          <img
            src={javascript}
            alt="Logo JavaScript"
            title="JavaScript"
            onClick={() => handleTechnologyClick("javascript")}
            className={currentTechnology === "javascript" ? "selected" : ""}
          />
          <img
            src={css}
            alt="Logo CSS3"
            title="CSS3"
            onClick={() => handleTechnologyClick("css")}
            className={currentTechnology === "css" ? "selected" : ""}
          />
          <img
            src={html}
            alt="Logo HTML5"
            title="HTML5"
            onClick={() => handleTechnologyClick("html")}
            className={currentTechnology === "html" ? "selected" : ""}
          />
          <img
            src={tailwind}
            alt="Logo Tailwind CSS"
            title="Tailwind CSS"
            onClick={() => handleTechnologyClick("tailwind")}
            className={currentTechnology === "tailwind" ? "selected" : ""}
          />
          <img
            src={git}
            alt="Logo Git"
            title="Git"
            onClick={() => handleTechnologyClick("git")}
            className={currentTechnology === "git" ? "selected" : ""}
          />
        </div>
        <div className="technology-description">
          <p className="tech-desc">
            {technologyDescriptions[currentTechnology]}
          </p>
        </div>
      </div>
    </div>
  );
}
