import React from "react";

function GradientBackground() {
  return (
    <div className="bg-home">
      {/* <img className="bg-home" src="" /> */}
      <div className="bg-home__gradient">
        <div className="rigth-bottom"></div>
        <div className="center-top"></div>
        <div className="left-bottom"></div>
        <div className="right-top"></div>
        <div className="center-bottom"></div>
      </div>
    </div>
  );
}

export default GradientBackground;
