import React from "react";
import "./styles.scss";
import logoAcessaBR from "../../images/logoAcessaBr.svg";
import logoEbac from "../../images/logo-ebac.svg";

const Header = (props) => {
  return (
    <header className="header__container">
      <div className="header__logo header__logo--state">
        <img src={logoAcessaBR} alt="Logo AcessaBR" />
        <span className="header__city">
          / {props.city} - {props.uf}
        </span>
      </div>
      <div className="header__logo header__logo--ebac">
        <span className="header__support">Apoio:</span>
        <img src={logoEbac} alt="Logo EBAC" />
      </div>
    </header>
  );
};

export default Header;
