import React, { useState, useMemo } from "react";
import react from "../../imagens/react.png";
import typescript from "../../imagens/typescript.png";
import javascript from "../../imagens/javascript.png";
import css from "../../imagens/css3.png";
import html from "../../imagens/html5.png";
import tailwind from "../../imagens/tailwind.png";
import firebase from "../../imagens/firebase.png";
import git from "../../imagens/git.png";
import hability from "../../imagens/ability.png";
import mysql from "../../imagens/mysql-database.png";
import Staration from "./staration";

export default function Abilitys({ id }) {
  const icons = [
    { id: "html", src: html, label: "HTML5", level: 3 },
    { id: "css", src: css, label: "CSS3", level: 3 },
    { id: "javascript", src: javascript, label: "JavaScript", level: 2 },
    { id: "git", src: git, label: "Git", level: 3 },
    { id: "react", src: react, label: "React", level: 3 },
    { id: "typescript", src: typescript, label: "TypeScript", level: 2 },
    { id: "tailwind", src: tailwind, label: "Tailwind", level: 2 },
    { id: "firebase", src: firebase, label: "Firebase", level: 2 },
    { id: "mysql", src: mysql, label: "MySQL", level: 1 },
  ];

  const technologyDescriptions = {
    html: "Comecei aprendendo sobre HTML, que é uma linguagem de marcação. No início eu me confundia bastante, achando que era uma linguagem de programação. Quando descobri que era apenas de marcação, fiquei um pouco decepcionado, mas depois entendi o seu valor e o quanto é essencial para estruturar e organizar um projeto. Hoje estou melhorando e me dedicando para alcançar excelência nisso.",
    react:
      "React foi a primeira biblioteca que aprendi e logo me apaixonei. Para um júnior, aprender React foi fundamental para entender a importância de trabalhar com componentes, manter um código mais limpo e organizar projetos de forma escalável. Ela me ajudou a estruturar melhor minhas ideias. Atualmente busco evoluir ainda mais na organização, deixando meus códigos mais claros e fáceis de manter.",
    typescript:
      "Quando comecei a usar TypeScript nos meus projetos, foi simplesmente incrível. Ele me ajudou a entender melhor o que eu estava fazendo. O fato de apontar erros e bugs de forma mais clara tornou o aprendizado muito mais tranquilo. Ainda é desafiador perceber todas as diferenças entre JavaScript e TypeScript, mas estou me dedicando para que isso se torne natural. Hoje me considero bom em TypeScript, mas com um enorme espaço para crescer e me tornar excelente.",
    javascript:
      "Já faz um tempo que estudo JavaScript, e tem sido ao mesmo tempo divertido e desafiador. É uma linguagem que parece não ter fim: sempre que tento fazer algo novo, descubro ainda mais possibilidades. Essa amplitude me fascina. Hoje me considero decente nela, mas sei que ainda tenho muito a aprender nesse universo praticamente infinito.",

    css: "Junto com HTML, comecei a aprender CSS. Confesso que no início foi um pouco difícil (e ainda é em alguns pontos) lidar com todas as opções que ele oferece. Mas, ao mesmo tempo, foi a parte mais divertida: ver o projeto ganhar vida, cores, formas e animações é algo empolgante. Gosto muito dessa parte e, embora ainda tenha bastante a aprender, já consigo fazer bastante coisa. Hoje me considero em nível intermediário.",

    tailwind:
      "Tenho me acostumado a usar Tailwind nos meus projetos para evitar criar CSS desnecessário. No geral, não é difícil utilizá-lo, mas o maior desafio está em saber identificar os momentos certos de aplicar.",

    git: "Tenho domínio do básico de Git: criar repositórios, clonar, fazer commit, push, pull, criar branches e realizar merge. Também sei utilizar GitHub e GitLab. Ainda preciso de mais experiências práticas para ganhar confiança, pois acredito que a vivência real é sempre mais valiosa do que apenas a prática em estudos. No geral, me considero competente para o nível júnior.",
    firebase:
      "Aprendi a usar Firebase mais recentemente, explorando autenticação e banco de dados. Fiz dois projetos utilizando o banco e achei a plataforma muito interessante: simples e prática, principalmente quando comparada ao MySQL. No entanto, ainda tenho muito a aprender para consolidar meus conhecimentos e falar com mais propriedade.",
    mysql:
      "O MySQL tem sido um banco de dados relativamente mais desafiador de aprender, principalmente por ser menos automatizado que o Firebase. Isso traz tanto vantagens quanto desvantagens: enquanto o Firebase facilita e agiliza, o MySQL oferece mais controle, o que é incrível. Apesar da curva de aprendizado ser maior, a experiência tem sido muito boa. Já consigo me virar bem, mas ainda preciso de mais prática para avançar.",
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
        <div className="tech-desc">
          <Staration level={icons[currentIndex].level} />
          <p>{technologyDescriptions[currentId]}</p>
        </div>
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
