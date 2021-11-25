import React, { useState } from "react";
import "./styles.scss";

import ImgDestak from "../../images/imagem-destaque.png";

import Pills from "../../components/Pills";

const PLACES = [
  "Bares",
  "Praça",
  "Parque",
  "Igreja",
  "Hotel",
  "Restaurante",
  "Zoológico",
  "Farmácia",
  "Oceanários",
  "Praias",
];

const Home = (props) => {
  const [selectedPill, setSelectedPill] = useState(false);

  return (
    <main id="main-content" className="home__container">
      <div className="home__col">
        <h1 className="home__title">{props.city} para todos</h1>
        <p className="home__text">
          Nossa missão é facilitar o encontro entre lugares inclusivos e pessoas
          que buscam alternativas culturais para sair de casa, com a mobilidade
          que todo cidadão precisa.
        </p>
        <p className="home__text">
          Checamos 10 itens essenciais de acessibilidade para pessoas com
          deficiência em diversos pontos da cidade.
        </p>
        <div className="home__pills">
          {PLACES.map((item) => (
            <Pills
              local={item}
              selected={selectedPill === item}
              onClick={() => setSelectedPill(item)}
            />
          ))}
        </div>
      </div>
      <div className="home__col">
        <div className="home__image home__image--highlight">
          <img src={ImgDestak} alt="Imagem destaque cadeirante" />
        </div>
      </div>
    </main>
  );
};

export default Home;
