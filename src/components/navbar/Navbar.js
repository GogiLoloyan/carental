import React from "react";
import { NavLink, useLocation } from "react-router-dom";

function Navbar(props) {
    const location = useLocation();
    const team = location.state ? location.state.team : "red";
    return (
        <nav className="navbar" role="navigation" data-team={team}>
            <NavLink to="/" className="logo" tabIndex="0">
                <span tabIndex="-1">
                    ca<div className="design-letter">r</div>ental
                </span>
            </NavLink>
            <ul className="nav">
                <li><NavLink to={{ pathname: "/services",     state: { team: "blue", page: 2 } }}  data-blue  activeClassName="active"><span tabIndex="-1">services</span></NavLink></li>
                <li><NavLink to={{ pathname: "/vehicles",     state: { team: "red",  page: 3 } }}  data-red   activeClassName="active"><span tabIndex="-1">vehicles</span></NavLink></li>
                <li><NavLink to={{ pathname: "/benefits",     state: { team: "blue", page: 4 } }}  data-blue  activeClassName="active"><span tabIndex="-1">our benefits</span></NavLink></li>
                <li><NavLink to={{ pathname: "/testimonials", state: { team: "red",  page: 5 } }}  data-red   activeClassName="active"><span tabIndex="-1">testimonials</span></NavLink></li>
                <li><NavLink to={{ pathname: "/stations",     state: { team: "blue", page: 6 } }}  data-blue  activeClassName="active"><span tabIndex="-1">stations</span></NavLink></li>
            </ul>
            <div className="menu-hamburger" role="button" tabIndex="0">
                <div tabIndex="-1">
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
