import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Curator from "./components/Curator";

import "./styles/global.scss";
import Footer from "./components/Footer";
import Places from "./components/Places";

const CONFIG = {
  city: "Aracaju",
  uf: "SE",
};

ReactDOM.render(
  <div className="main__wrapper">
    <div className="main__container">
      <Header city={CONFIG.city} uf={CONFIG.uf} />
      <Home city={CONFIG.city} />
      <Places />
      <Curator />
    </div>
    <Footer />
  </div>,
  document.getElementById("root")
);
