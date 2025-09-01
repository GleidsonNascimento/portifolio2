import React, { useContext } from "react";
import { PortifolioContext } from "../contextProjet.js/contextProject";
import github from "../../imagens/github-sun.png";

import { Close } from "@material-ui/icons";
import "./project.css";

export default function Project({ projectId, onCloseModal }) {
  const { AllProject } = useContext(PortifolioContext);
  const projeto = AllProject.find(
    (projeto) => projeto.id === parseInt(projectId)
  );

  if (!projeto) {
    return null;
  }
  return (
    <div className={`proj modal-enter`} key={projeto.id}>
      <div className="close-button" onClick={onCloseModal}>
        <Close />
      </div>
      <div className="cont-proj">
        <h1>{projeto.name}</h1>
        <p className="descr">{projeto.description}</p>
        <img src={projeto.image} alt="" />
        <h2 className="about-pr">Sobre</h2>
        <p className="descr">{projeto.about}</p>
        <h2 className="about-pr"> Tecnologias</h2>
        <animatedBanner />
        <ul>
          {projeto.Technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>

        <div className="git-link">
          <h2>Github</h2>
          <div className="box-link">
            <img src={github} alt="Github Icon" />
            <h3>
              <a href={projeto.repository} target="_blank" rel="noreferrer">
                {projeto.repository}
              </a>
            </h3>
          </div>
        </div>
      </div>
      <div className="container-open">
        <div className="open-project">
          <a href={projeto.Link} target="_blank" rel="noreferrer">
            Abri projeto
          </a>
        </div>
      </div>
    </div>
  );
}
