import React, { useState, useMemo } from "react";
import react from "../../imagens/react.png";
import typescript from "../../imagens/typescript.png";
import javascript from "../../imagens/javascript.png";
import css from "../../imagens/css3.png";
import html from "../../imagens/html5.png";
import tailwind from "../../imagens/tailwind.png";
import AnimatedBanner from "../about/sky";
import git from "../../imagens/git.png";
import hability from "../../imagens/ability.png";

export default function Abilitys({ id }) {
  const icons = [
    { id: "react", src: react, label: "React" },
    { id: "typescript", src: typescript, label: "TypeScript" },
    { id: "javascript", src: javascript, label: "JavaScript" },
    { id: "css", src: css, label: "CSS3" },
    { id: "html", src: html, label: "HTML5" },
    { id: "tailwind", src: tailwind, label: "Tailwind" },
    { id: "git", src: git, label: "Git" },
  ];

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

  const [currentIndex, setCurrentIndex] = useState(0);

  const pathData = useMemo(
    () => generateWavyPath(icons.length),
    [icons.length]
  );
  const progressOffset = 1000 - ((currentIndex + 1) / icons.length) * 1000;

  const handleClick = (index) => setCurrentIndex(index);

  const currentId = icons[currentIndex].id;

  return (
    <div className="ability-con">
      <h2>
        Habilidades <img src={hability} alt="" />
      </h2>

      <div className="timeline-wrapper">
        <svg
          className="timeline-line"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
        >
          <path d={pathData} className="timeline-path-bg" />
          <path
            d={pathData}
            className="timeline-path"
            strokeDasharray="1000"
            strokeDashoffset={progressOffset}
          />
        </svg>

        <div className="timeline-icons">
          {icons.map((icon, idx) => (
            <div key={icon.id} className="timeline-icon-wrapper">
              <img
                src={icon.src}
                alt={icon.label}
                title={icon.label}
                onClick={() => handleClick(idx)}
                className={`timeline-icon ${
                  idx === currentIndex ? "selected" : ""
                }`}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="technology-description">
        <p className="tech-desc">{technologyDescriptions[currentId]}</p>
      </div>
    </div>
  );
}

function generateWavyPath(steps) {
  const amplitude = 15;
  const spacing = 1000 / steps;
  let path = `M0,50`;
  for (let i = 1; i <= steps; i++) {
    const x = i * spacing;
    const y = 50 + (i % 2 === 0 ? -amplitude : amplitude);
    path += ` Q ${x - spacing / 2},${y} ${x},50`;
  }
  return path;
}
