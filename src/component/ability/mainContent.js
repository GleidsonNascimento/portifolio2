import React from "react";
import "./ability.css";
import Abilitys from "./habilidades";
import Projetos from "../projects/projetos";
import Email from "../email/email";

export default function MainPage() {
  return (
    <div className="background-ability container-max">
      <section className="main-section">
        <div className="content-section">
          <section id="ability-section">
            <Abilitys />
          </section>
          <section id="projects-section">
            <Projetos />
          </section>
          <section id="email-section">
            {" "}
            <Email />
          </section>
        </div>
      </section>
    </div>
  );
}
