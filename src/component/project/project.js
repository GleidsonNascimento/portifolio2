import React, { useContext } from "react";
import { PortifolioContext } from "../contextProjet.js/contextProject";
import "boxicons";
import { useParams } from "react-router-dom";
import "./project.css";

export default function Project({ projectId }) {
  const { AllProject } = useContext(PortifolioContext);
  const projeto = AllProject.find(
    (projeto) => projeto.id === parseInt(projectId)
  );

  if (!projeto) {
    return null;
  }

  console.log(projeto);

  return (
    <div className={`proj modal-enter`} key={projeto.id}>
      <div className="cont-proj">
        <h1>{projeto.name}</h1>
        <p className="descr">{projeto.description}</p>
        <img src={projeto.image} alt="" />
        <h2 className="about">About</h2>
        <p className="descr">{projeto.about}</p>
        <h2 className="about"> Technologies</h2>
        <ul>
          {projeto.Technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
        <div className="links">
          <h2>WebSite</h2>
          <div>
            <h3>
              <a
                className="a-icon"
                href={projeto.Link}
                target="_blank"
                rel="noreferrer"
              >
                <box-icon name="link-alt"></box-icon> {projeto.Link}
              </a>
            </h3>
          </div>
        </div>
        <div className="links">
          <h2>Github</h2>
          <div className="box-link">
            <box-icon name="git" type="logo"></box-icon>
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
