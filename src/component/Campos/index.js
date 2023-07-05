import React, { useState, useContext } from "react";
import { PortifolioContext } from "../contextProjet.js/contextProject";
import { Button, Modal } from "@material-ui/core";
import { Link } from "react-router-dom";

import "./campo.css";
import Project from "../project/project";
import NavBar from "../Topo";

export default function Projects() {
  const { AllProject } = useContext(PortifolioContext);
  const [openModal, setOpenModal] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const handleOpenModal = (projectId) => {
    setSelectedProjectId(projectId);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedProjectId(null);
  };

  return (
    <div className="container">
      <NavBar />
      <div className="itens">
        {AllProject.map((projeto) => (
          <div
            className="item"
            key={projeto.id}
            style={{
              backgroundImage: `url(${projeto.image})`,
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="qualquer">
              <Link to="#" onClick={() => handleOpenModal(projeto.id)}>
                <h2 className="textos-animados">{projeto.name}</h2>
                <ul className="tech">
                  {projeto.Technologies.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
                <p className="textos-animados desc">{projeto.description}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Modal className="modal" open={openModal} onClose={handleCloseModal}>
        {selectedProjectId && <Project projectId={selectedProjectId} />}
      </Modal>
    </div>
  );
}
