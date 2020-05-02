import React from "react";
import img from "../../../../../services_car.png";

const GradientBackground = () => (
  <div className="bg-services">
    <img className="bg-services__car" alt="mazda" src={img} />
    <div className="bg-services__gradient"></div>
  </div>
);

export default GradientBackground;
