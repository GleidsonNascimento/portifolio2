import React from "react";
import programador from "../../imagens/programador.jpg";
import "./about.css";

export default function About() {
  return (
    <div>
      <div className="about">
        <div className="about-text">
          <h3>
            OLÁ, EU SOU
            <br />
            Gleidson nascimento <br />
            DESENVOLVEDOR FRONT-END
          </h3>

          <p>
            Trabalhei como freelancer por 4 anos na area de design grafico, me
            sentindo infeliz procurei outra area que pudesse trabalha e me
            sentir realizado, quando me apaixonei e agora sigo firme aprendendo
            todo dia enquanto me divirto escrevendo código e procurando soluções
          </p>
          <div>
            <box-icon
              name="linkedin-square"
              type="logo"
              color="#0663fa"
            ></box-icon>
            <box-icon name="twitter" type="logo" color="#0663fa"></box-icon>
            <box-icon name="github" type="logo" color="#ffffff"></box-icon>
          </div>
        </div>
        <div className="banner-about">
          <img src={programador} alt="" />
        </div>
      </div>
    </div>
  );
}
