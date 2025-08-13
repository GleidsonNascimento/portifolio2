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
    html: "  Comecei aprendendo sobre HTML, que é uma linguagem de marcação. Eu me confundia muito, me iludindo que era uma linguagem de programação. Quando descobri que era apenas uma linguagem de marcação, fiquei levemente decepcionado, mas acabei entendendo seu valor e o quanto é importante para estruturar e organizar o projeto. Ainda preciso melhorar muito, mas estou me dedicando a isso.",
    react:
      "React foi a primeira biblioteca que aprendi, e me apaixonei por ela. Para um júnior sem noção de como fazer um código limpo e um projeto escalavel, ela me ajudou a me organizar e estruturar melhor o que estava fazendo, estou me dedicando a aprender mais sobre isso. Me considero decente no React atualmente.",
    typescript:
      "Para quem começou, brincar com o TypeScript e fazer projetos nele foi simplesmente maravilhoso. É uma linguagem que me ajudou muito a entender melhor o que estou fazendo. O fato de ser mais fácil reconhecer um erro ou bug ajuda demais, tornando tudo mais tranquilo no aprendizado. Ainda é complicado perceber as diferenças entre o JavaScript e o TypeScript, mas estou me dedicando para que isso se torne natural para mim. Me considero mediano no TypeScript atualmente.",
    javascript:
      "Já faz um tempo que estou aprendendo JavaScript, e tem sido divertido e desafiador ao mesmo tempo. Parece uma linguagem sem fim: toda vez que tento fazer algo, descubro algo novo. É uma linguagem que me fascina. Me considero decente nela atualmente, mesmo ainda tendo muito o que aprender e sempre parecendo que continuo sem entender o tamanho do mundo que é, mas estou me dedicando para deixar de ser menos ignorante nela e me tornar um ótimo desenvolvedor.",

    css: "Claro que junto com HTML, comecei a aprender CSS, confesso que no começo foi um pouco dificil (ainda é) aprender a lidar com todas as opções que o CSS pode me oferecer, mas ao mesmo tempo foi a parte mais divertida, é muito empolgante ver as coisas se transformando e ganhando vida, cores, formas e animação, é uma parte que eu gosto muito, ainda tenho muito o que aprender, mas estou me dedicando a isso, mas já sei fazer bastante coisa, me considero mediano.",

    tailwind:
      "Estou me acostumando a usar o Tailwind nos meus códigos para evitar criar CSS desnecessário. No geral, usá-lo não é difícil, mas é complicado entender os momentos certos de aplicar. Estou aprendendo e me considero bom no Tailwind atualmente.",

    git: "Sei o bom básico do Git: criar repositórios, clonar, fazer commit, push, pull, criar branches e fazer merge. Sei usar o GitHub e o GitLab, mas ainda preciso de mais experiências reais para me sentir mais confortável. Experiências reais são sempre melhores que as de estudo, principalmente quando se trata de Git. Me considero competente para um júnior.",
    firebase:
      "Eu aprendi a usar firebase mais recentemente, aprendi a usar autenticação e banco de dados, fiz dois projetos com o banco de dado, achei um banco muito interessante,bem simples de usar, mais simples que o MYSQL por exemplo, mas ainda tenho muito que aprender pra ter certezas do que estou falando.",
    mysql:
      "MYSQL tá sendo um banco de dado relativamente dificil de realmente aprender a mexer, o firebase é bem simples e automatizado o que trás vantagens e desvantagens, enquanto mysql me sinto mais no controle, o que é incrivel, mas também pra aprender é mais dificil, tá sendo uma boa expeririência, mas to longe de ser bom",
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
        <p className="tech-desc">
          <Staration level={icons[currentIndex].level} />
          {technologyDescriptions[currentId]}
        </p>
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
