import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => (
    <ul className="nav">
        <li><NavLink to={{ pathname: "/services", state: { team: "blue", page: 2 } }} data-blue activeClassName="active"><span tabIndex="-1">services</span></NavLink></li>
        <li><NavLink to={{ pathname: "/vehicles", state: { team: "red", page: 3 } }} data-red activeClassName="active"><span tabIndex="-1">vehicles</span></NavLink></li>
        <li><NavLink to={{ pathname: "/benefits", state: { team: "blue", page: 4 } }} data-blue activeClassName="active"><span tabIndex="-1">our benefits</span></NavLink></li>
        <li><NavLink to={{ pathname: "/testimonials", state: { team: "red", page: 5 } }} data-red activeClassName="active"><span tabIndex="-1">testimonials</span></NavLink></li>
        <li><NavLink to={{ pathname: "/stations", state: { team: "blue", page: 6 } }} data-blue activeClassName="active"><span tabIndex="-1">stations</span></NavLink></li>
    </ul>
);

export default Nav;