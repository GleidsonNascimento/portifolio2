import React, { useEffect, useRef } from "react";
import linkdin from "../../imagens/linkedin-sun.png";
import twitter from "../../imagens/x-moon.png";
import printer from "../../imagens/printer.png";
import curriculo from "../../imagens/currículo.pdf";

import Typed from "typed.js";
import "./about.css";

export default function About({ id, showAbout, setShowAbout }) {
  const spanRef = useRef(null);
  const typedInstance = useRef(null);

  useEffect(() => {
    if (showAbout && spanRef.current) {
      typedInstance.current = new Typed(spanRef.current, {
        strings: ["DESENVOLVEDOR FRONT‑END"],
        typeSpeed: 50,
        loop: false,
      });
    }
    return () => {
      typedInstance.current?.destroy();
      typedInstance.current = null;
    };
  }, [showAbout]);

  return (
    <div className="about">
      <div className="about-image"></div>

      {showAbout && (
        <div className="about-text-wrapper">
          <div className="about-text about-text--flip-in">
            <div>
              <div className="apresentation-name">
                <h1>Olá, sou Gleidson</h1>

                <h2>
                  <span ref={spanRef}></span>
                </h2>
                <p>
                  Formado em Design Gráfico, trabalhei por alguns anos na área,
                  mas não consegui me sentir realizado. Por isso, estou em
                  transição de carreira, buscando me aperfeiçoar e encontrar meu
                  espaço na área de TI, com foco em front-end.
                </p>
              </div>
              <div className="social-media">
                <a
                  download="curriculo.pdf"
                  href={curriculo}
                  className="download"
                >
                  <img src={printer} alt="" />
                </a>
                <a
                  href="https://x.com/AlguemGleidson"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={twitter} alt="" />
                </a>
                <a
                  href="https://www.linkedin.com/in/gleidson-guimar%C3%A3es-b927b2254/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={linkdin} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
