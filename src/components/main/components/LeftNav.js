import React from "react";

const LeftNav = ({ currentPageNumber, colorTeam }) => (
  <nav className="left-nav" role="navigation">
    <div className="left-nav__content">
      <div
        className="left-nav__content__front"
        data-team={colorTeam}
        style={{ "--top": currentPageNumber - 1 }}
      >
        <div className="line">
          <div className="line__front"></div>
          <div className="line__shadow"></div>
        </div>
        <span className="page-number">{`0${currentPageNumber}`}</span>
      </div>
      <div className="left-nav__content__back">
        {/* 
            you also can use this second variant for display 12 small sircls
            or just use radial-gradient css variant
            <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> 
        */}
      </div>
    </div>
  </nav>
);

export default LeftNav;
