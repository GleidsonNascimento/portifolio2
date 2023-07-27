import React, { useEffect, useRef } from "react";
import programador from "../../imagens/programador.jpg";
import github2 from "../../imagens/github2.png";
import linkdin from "../../imagens/Linkidin.png";
import twitter from "../../imagens/twitter.png";
import "boxicons";
import Typed from "typed.js";
import "./about.css";

export default function About() {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["DESENVOLVEDOR FRONT-END"],
      typeSpeed: 50,
      loop: false,
      loopCount: Infinity,
    };

    typedRef.current = new Typed("#typed-text", options);

    return () => {
      typedRef.current.destroy();
    };
  }, []);

  return (
    <div>
      <div className="about">
        <div className="about-text">
          <h2>OLÁ, SOU GLEIDSON</h2>
          <h2>
            <span id="typed-text"></span>
          </h2>

          <p>
            Trabalhei como freelancer por 4 anos na área de design gráfico, me
            sentindo infeliz procurei outra área que pudesse trabalhar e me
            sentir realizado, quando me apaixonei e agora sigo firme aprendendo
            todo dia enquanto me divirto escrevendo código e procurando
            soluções.
          </p>
          <div className="social-link">
            <a
              href="https://www.linkedin.com/in/gleidson-guimar%C3%A3es-b927b2254/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img src={linkdin} alt="" srcset="" />
            </a>

            <a
              href="https://twitter.com/AlguemGleidson"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitter} alt="" srcset="" />
            </a>

            <a
              href="https://github.com/GleidsonNascimento?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github2} alt="" srcset="" />
            </a>
          </div>
        </div>
        <div className="banner-about">
          <img src={programador} alt="" />
        </div>
      </div>
    </div>
  );
}
