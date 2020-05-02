import React from "react";
import GradientBackground from "./components/GradientBackground";
import Header from "./components/Header";
import ServicesCards from "./components/ServicesCards";

function Services() {
  return (
    <>
      <GradientBackground />
      <section className="services">
        <Header />
        <ServicesCards />
      </section>
    </>
  );
}

export default Services;
