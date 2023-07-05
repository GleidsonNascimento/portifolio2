import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

export default function NavBar() {
  return (
    <div>
      <header>
        <div className="navbar">
          <p>
            <Link to="/">Home</Link>
          </p>
          <p>
            <Link to="/ability">Habilidades</Link>
          </p>
          <p>
            {" "}
            <Link to="/projects">Projetos</Link>{" "}
          </p>
        </div>
      </header>
    </div>
  );
}
