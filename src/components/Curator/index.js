import React from "react";
import "./card.scss";
import curatorPhoto from "../../images/curator-photo.png";

const Curator = () => {
  return (
    <div className="curator__container">
      <div className="curator__photo">
        <img src={curatorPhoto} alt="Foto do curador Victor Queiroz" />
      </div>
      <div className="curator__details">
        <div>
          <h3>Victor Queiroz</h3>
          <h6>Curadoria</h6>
        </div>
        <p>
          Graduando em Ciência da Computação pela UFS. Desenvolvedor web jr,
          entusiasta do ecossistema Javascript vem aprimorando seus
          conhecimentos na área e utilizando desses conhecimentos para trazer
          mais qualidade de vida para todos.
        </p>
      </div>
    </div>
  );
};

export default Curator;
