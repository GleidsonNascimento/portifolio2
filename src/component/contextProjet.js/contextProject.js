import React, { createContext } from "react";
import pokedex from "../../imagens/pokedex-img.png";
import gelateria from "../../imagens/gelateria-img.png";
import detetive from "../../imagens/detetive-img.png";
import investing from "../../imagens/investing-img.png";
import personagens from "../../imagens/personagens.png";
import adocao from "../../imagens/adoção.png";

export const PortifolioContext = createContext();

export const Provider = ({ children }) => {
  const AllProject = [
    {
      id: 1,
      name: "Site de adoção",
      Technologies: ["React js", "Firebase", "React hooks:useState, useeffect"],
      description:
        "um site feito com objetivo de doar pra alguma ong, com objetivo de facilitar a divulgar animais pra doação e doa-lós",
      repository: "https://github.com/GleidsonNascimento/sistema-de-ado-o",
      about:
        "um projeto de doação de animal, com objetivo simples de doar animal, feito em react/typescript, usando boa parte do que eu sei e aprendi, com sistema de login com autenticação e banco de dados ligado ao firebase",
      Link: "https://sistema-de-ado-o.vercel.app/",
      image: adocao,
    },
    {
      id: 2,
      name: "Pokedex",
      Technologies: [
        "javascript",
        "react js",
        "biblioteca InfiniteScroll",
        "React Hooks: useState, useEffect",
        "react-router-dom",
        "biblioteca animate",
      ],
      description:
        "Projeto simples de criar uma pokedex de um desafio, com alguns recursos uteis",
      repository: "https://github.com/GleidsonNascimento/pokedex",
      about:
        "Uma pokedex, com sistema de perfil, lista de todos os pokemons atualizado, com seus movimentos, status e nature, além das formas shiny deles",
      Link: "https://more-pokedex-again.netlify.app/",
      image: pokedex,
    },
    {
      id: 3,
      name: "Gelateria",
      Technologies: ["javascript", "CSS"],
      description:
        "Site de uma gelateria que fiz para demonstrar habilidades com css, uma simples landpage",
      repository: "https://github.com/GleidsonNascimento/gelateria",
      about:
        "Site de uma gelateria com menu, perfil, localização, contato é apenas simples landpage com recursos simples, feito em react apenas para organizar a forma que eu faço",
      Link: "https://gelateria-g.netlify.app/",
      image: gelateria,
    },
    {
      id: 4,
      name: "Ficha detetive",
      Technologies: ["javascript", "CSS", "React"],
      description:
        "Ficha de suspeito para auxiliar no jogo detetive pois do tabletop a ficha deles é horrivel e não ajuda muito",
      repository: "https://github.com/GleidsonNascimento/Ficha-detetive",
      about:
        "Como dito na descrição é uma ficha par auxiliar no jogo detetive, principalmente para a do jogo tabletop, onde tive bastante dificuldade para marca as peças, sentindo falta tempo todo de uma forma melhor para organizar quem tinha as cartas e etc, ainda sinto que preciso melhorar, mas por enquanto estar bom assim",
      Link: "https://detetive-ficha.netlify.app/",
      image: detetive,
    },
    {
      id: 5,
      name: "Simulator investing",
      Technologies: [
        "Javascript",
        "HTML",
        "CSS",
        "React",
        "mui material",
        "react hooks",
      ],
      description:
        "Simulador de investimento que calcula a mensalidade do valor investido com a taxa selic",
      repository: "https://github.com/GleidsonNascimento/investing",
      about:
        "Simulador de investimento inspirado no simulador da nubank, com opção de calcular investimento na taxa selic ",
      image: investing,
      Link: "",
    },
    {
      id: 6,
      name: "curiosidade personagens",
      Technologies: ["HTML", "CSS", "React"],
      description: "Projeto de curiosidade de personagens e animes",
      repository:
        "https://github.com/GleidsonNascimento/Personagens-curiosidade",
      about:
        "O projeto tem como intuito apenas apresentar alguns personagens, informações sobre eles e animes, personagens que eu gosto ou acho legal, pretendo atualizar, talvez criar mais funções no futuro, mas por enquanto é isso, apenas um projeto simples",
      image: personagens,
      Link: "https://curiosidade-de-personagem.netlify.app/",
    },
  ];
  const contextValue = { AllProject };
  return (
    <PortifolioContext.Provider value={contextValue}>
      {children}
    </PortifolioContext.Provider>
  );
};
