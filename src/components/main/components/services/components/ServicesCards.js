import React from "react";
import ServiceCard from "../../../../common/ServiceCard";

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

const ServicesCards = () => (
  <main className="services__cards" aria-label="our services">
    {servicesData.map((service, index) => (
      <ServiceCard {...service} key={index} />
    ))}
  </main>
);

export default ServicesCards;
