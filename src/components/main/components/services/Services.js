import React from "react";
import img from "../../../../services_car.png";

const servicesData = [
  {
    header: "Rent a car",
    description: "Rent yout favorite car"
  },
  {
    header: "Auto parts",
    description: "Track your pickups & delivery in real time"
  },
  {
    header: "Fuel Plans",
    description: "See the nearest gas stations on yor way"
  },
  {
    header: "Car navigation",
    description: "Select only shortest and best route"
  }
];

function Services() {
  return (
    <>
      {/* for background image and gradients */}
      <div className="bg-services">
        <img className="bg-services__car" src={img} />
        <div className="bg-services__gradient"></div>
      </div>

      {/* services page */}
      <section className="services">
        {/* services header */}
        <header
          className="services__header"
          aria-label="car rental services description"
        >
          <h1 data-text="OUR SERVICES">Our services</h1>
          <p>
            We are offering a variety of cars, services, and
            <br /> partnerships to meet all your travel needs
          </p>
        </header>

        {/* services cards using grid */}
        <main className="services__cards" aria-label="our services">
          {servicesData.map((service, index) => (
            <section className="card" key={index} aria-label={service.header}>
              <header className="header">
                <div className="header__icon">
                  <span className="header__icon__bubbles"></span>
                  {/* <img alt="icon"></img> */}
                </div>
                <h2 className="header__text" aria-label="Rent a car">
                  {service.header}
                </h2>
              </header>
              <p className="description">{service.description}</p>
            </section>
          ))}
        </main>
      </section>
    </>
  );
}

export default Services;
