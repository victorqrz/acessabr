import React from "react";
import "./style.scss";
import logoAcessaBR from "../../images/logoAcessaBr.svg";
import logoEbac from "../../images/logo1.svg";

const Header = () => {
  return (
    <header className="header__container">
      <div className="header__logo header__logo--state">
        <img src={logoAcessaBR} alt="Logo AcessaBR" />
        <span className="header__city">/ Aracaju - SE</span>
      </div>
      <div className="header__logo header__logo--ebac">
        <span className="header__support">Apoio:</span>
        <img src={logoEbac} alt="Logo EBAC" />
      </div>
    </header>
  );
};

export default Header;
