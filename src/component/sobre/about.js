import NavBar from "../Topo";
import programador from "../../imagens/programador.jpg";

export default function About() {
  return (
    <div>
      <NavBar />
      <div>
        <h4>Olá, eu sou </h4>
        <h1>Gleidson Nascimento</h1>
        <h3>Front-End Developer</h3>
        <img src={programador} alt="adasd" />
      </div>
    </div>
  );
}
