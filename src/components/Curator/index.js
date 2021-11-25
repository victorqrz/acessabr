import React from "react";
import "./styles.scss";
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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
          voluptas, distinctio itaque quidem ducimus culpa accusamus cumque iste
          non voluptates obcaecati exercitationem fugit. Assumenda ad pariatur
          inventore deleniti eligendi nostrum!
        </p>
      </div>
    </div>
  );
};

export default Curator;
