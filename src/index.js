import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Home from "./pages/Home";

import "./styles/global.scss";

const CONFIG = {
  city: "Aracaju",
  uf: "SE",
};

ReactDOM.render(
  <div className="main__wrapper">
    <div className="main__container">
      <Header city={CONFIG.city} uf={CONFIG.uf} />
      <Home city={CONFIG.city} />
    </div>
  </div>,
  document.getElementById("root")
);
