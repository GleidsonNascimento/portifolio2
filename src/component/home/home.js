import React from "react";
import NavBar from "../Topo";
import "./home.css";
import Banner from "../about/banner";

export default function Home() {
  return (
    <div className="background container-max">
      <NavBar />
      <Banner />
    </div>
  );
}
