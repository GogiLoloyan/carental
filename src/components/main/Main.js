import React, { useEffect, useState } from "react";
import { Switch, Route, NavLink, useLocation } from "react-router-dom";

import Home from "./components/home/Home";
import Services from "./components/services/Services";
import Vehicles from "./components/vehicles/Vehicles";
import Benefits from "./components/benefits/Benefits";
import Testimonials from "./components/testimonials/Testimonials";
import Stations from "./components/stations/Stations";
import ContactUS from "./components/contact us/ContactUS";
import SvgMaker from "../../helper/SvgMaker";

function Main() {
  const locState = useLocation().state;
  const team = locState ? locState.team : "red";
  const pageNumber = locState ? locState.page : 1;
  const isContactPage = pageNumber === 7;

  return (
    <section className="main-page">
      {/* page's letf navigation for display current page number */}
      <nav className="left-nav" role="navigation">
        <div className="left-nav__content">
          <div
            className="left-nav__content__front"
            data-team={team}
            style={{ "--top": pageNumber - 1 }}
          >
            <div className="line">
              <div className="line__front"></div>
              <div className="line__shadow"></div>
            </div>
            <span className="page-number">{`0${pageNumber}`}</span>
          </div>
          <div className="left-nav__content__back">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
      </nav>

      {/* page's right part using for "contact us" or "back home" link */}
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
            <span className="link-content__text">{isContactPage ? "back home" : "contact us"}</span>
          </span>
        </NavLink>
      </div>

      {/* page's content using switch route */}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" exact component={Services} />
        <Route path="/vehicles" component={Vehicles} />
        <Route path="/benefits" component={Benefits} />
        <Route path="/testimonials" component={Testimonials} />
        <Route path="/stations" component={Stations} />
        <Route path="/contact-us" component={ContactUS} />
      </Switch>
    </section>
  );
}

export default Main;
