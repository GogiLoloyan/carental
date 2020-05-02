import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";

import Home from "./components/home/Home";
import Services from "./components/services/Services";
import Vehicles from "./components/vehicles/Vehicles";
import Benefits from "./components/benefits/Benefits";
import Testimonials from "./components/testimonials/Testimonials";
import Stations from "./components/stations/Stations";
import ContactUS from "./components/contact us/ContactUS";

import RightNav from "./components/RightNav";
import LeftNav from "./components/LeftNav";

function Main() {
  const locState = useLocation().state;
  const colorTeam = locState ? locState.team : "red";
  const currentPageNumber = locState ? locState.page : 1;
  const isContactPage = currentPageNumber === 7;

  return (
    <section className="main-page">
      <LeftNav currentPageNumber={currentPageNumber} colorTeam={colorTeam} />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" exact component={Services} />
        <Route path="/vehicles" component={Vehicles} />
        <Route path="/benefits" component={Benefits} />
        <Route path="/testimonials" component={Testimonials} />
        <Route path="/stations" component={Stations} />
        <Route path="/contact-us" component={ContactUS} />
      </Switch>

      <RightNav isContactPage={isContactPage} />
    </section>
  );
}

export default Main;
