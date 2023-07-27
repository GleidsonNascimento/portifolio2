import React, { useContext } from "react";
import { PortifolioContext } from "../contextProjet.js/contextProject";
import linkexterno from "../../imagens/link.png";
import github from "../../imagens/github.png";
import { useParams } from "react-router-dom";
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
        <h2 className="about-pr"> Technologies</h2>
        <ul>
          {projeto.Technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>

        <div className="links">
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
        <div className="open">
          <h2>
            <a href={projeto.Link} target="_blank" rel="noreferrer">
              Open Project
            </a>
          </h2>
        </div>
      </div>
    </div>
  );
}
