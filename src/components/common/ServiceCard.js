import React from "react";

const ServiceCard = ({ header, description, img }) => (
  <section className="card" aria-label={header}>
    <header className="header">
      <div className="header__icon">
        <span className="header__icon__bubbles"></span>
        {img && <img src={img} alt="icon"></img>}
      </div>
      <h2 className="header__text" aria-label="Rent a car">
        {header}
      </h2>
    </header>
    {description && <p className="description">{description}</p>}
  </section>
);

export default ServiceCard;
