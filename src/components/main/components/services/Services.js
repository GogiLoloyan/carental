import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import img from "../../../../Asset2.png";

function Services() {
  return (
    <>
      <div className="bg-services">
        <img className="bg-services__car" src={img} />
        <div className="bg-services__gradient"></div>
      </div>

      <section className="services">
        <header className="services__header" aria-label="description">
          <h1 data-text="OUR SERVICES">Our services</h1>
          <p>
            We are offering a variety of cars, services, and
            <br /> partnerships to meet all your travel needs
          </p>
        </header>
        <div className="services__services" aria-label="our services">
          <section className="service" data-order="1">
            <header className="header">
              <div className="header__icon">
                {/* <img alt="icon"></img> */}
              </div>
              <h2 className="header__text" aria-label="Rent a car">Rent a car</h2>
            </header>
            <p className="description"></p>
          </section>
          <section className="service" data-order="2">
            <header className="header">
              <div className="header__icon">
                {/* <img alt="icon"></img> */}
              </div>
              <h2 className="header__text" aria-label="Auto parts">Auto parts</h2>
            </header>
            <p className="description"></p>
          </section>
          <section className="service" data-order="3">
            <header className="header">
              <div className="header__icon">
                {/* <img alt="icon"></img> */}
              </div>
              <h2 className="header__text" aria-label="Fuel Plans">Fuel Plans</h2>
            </header>
            <p className="description"></p>
          </section>
          <section className="service" data-order="4">
            <header className="header">
              <div className="header__icon">
                {/* <img alt="icon"></img> */}
              </div>
              <h2 className="header__text" aria-label="Car navigation">Car navigation</h2>
            </header>
            <p className="description"></p>
          </section>
        </div>
      </section>
    </>
  );
}

export default Services;
