import React from "react";
import { NavLink } from "react-router-dom";

const Logo = () => (
  <NavLink to="/" className="logo" tabIndex="0">
    <span tabIndex="-1">
      ca<div className="design-letter">r</div>ental
    </span>
  </NavLink>
);

export default Logo;