import React, { useState, useContext } from "react";
import { PortifolioContext } from "../contextProjet.js/contextProject";
import { Button, Modal } from "@material-ui/core";
import { Link } from "react-router-dom";
import Project from "../project/project";
import paper from "../../imagens/paper.png";
import darkPaper from "../../imagens/dark-paper.png";
import { useTheme } from "../contextProjet.js/contextTheme";
import "./campo.css";

export default function Projetos({ id }) {
  const { AllProject } = useContext(PortifolioContext);
  const [openModal, setOpenModal] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const { theme } = useTheme();

  const handleOpenModal = (projectId) => {
    setSelectedProjectId(projectId);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedProjectId(null);
  };

  return (
    <div className="project-container">
      <h1>
        Projetos <img src={theme === "light" ? darkPaper : paper} alt="" />{" "}
      </h1>
      <div className="project-itens">
        {Array.isArray(AllProject) && AllProject.length > 0 ? (
          AllProject.map((projeto) => (
            <div
              className="project-item"
              key={projeto.id}
              style={{
                backgroundImage: `url(${projeto.image})`,
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <div className="box-project">
                <Link to="#" onClick={() => handleOpenModal(projeto.id)}>
                  <h2>{projeto.name}</h2>
                  <ul className="tech">
                    {projeto.Technologies.slice(0, 4).map((tech, index) => (
                      <li key={index}>{tech}</li>
                    ))}
                  </ul>
                  <p className="desc">{projeto.description}</p>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p>Nenhum projeto encontrado.</p>
        )}
        <Modal className="modal" open={openModal} onClose={handleCloseModal}>
          {selectedProjectId && (
            <Project
              projectId={selectedProjectId}
              onCloseModal={handleCloseModal}
            />
          )}
        </Modal>
      </div>
    </div>
  );
}
