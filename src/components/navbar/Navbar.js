import React from "react";
import { useLocation } from "react-router-dom";
import Logo from './Logo'
import MenuHamburger from './MenuHamburger'
import Nav from './Nav'

function Navbar(props) {
    const location = useLocation();
    const team = location.state ? location.state.team : "red";
    return (
        <nav className="navbar" role="navigation" data-team={team}>
            <Logo />
            <Nav />
            <MenuHamburger />
        </nav>
    );
}

export default Navbar;
