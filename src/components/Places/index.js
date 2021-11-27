import React from "react";
import Slider from "../Slider";
import "./places.scss";

const Places = () => {
  return (
    <section className="places">
      <div className="places__header">
        <h2 className="places__title">
          Locais <span>Acessíveis</span>
        </h2>
        <div className="places__select">
          <h5>Ordenar por:</h5>
          <select name="" id="">
            <option value="distancia">Distância</option>
            <option value="alfabeto">Alfabeto</option>
          </select>
        </div>
      </div>

      <div className="places__content">
        <Slider />
      </div>
    </section>
  );
};

export default Places;
