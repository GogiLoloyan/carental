import React from "react";
import { NavLink } from "react-router-dom";
import SvgMaker from "../../../helper/SvgMaker";

const RightNav = ({ isContactPage }) => (
  <div className="right-nav">
    <NavLink
      className="right-nav__link"
      tabIndex="0"
      data-order={isContactPage}
      to={{
        pathname: isContactPage ? "/" : "/contact-us",
        state: { team: "red", page: isContactPage ? 1 : 7 }
      }}
    >
      <span className="link-content" tabIndex="0">
        <SvgMaker icon="arrow-long" />
        <span className="link-content__text">
          {isContactPage ? "back home" : "contact us"}
        </span>
      </span>
    </NavLink>
  </div>
);

export default RightNav;
