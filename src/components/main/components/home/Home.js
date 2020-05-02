import React from "react";
import GradientBackground from "./components/GradientBackground";
import SearchFreeCar from "./components/SearchFreeCar";
import Header from "./components/Header";

function Home() {
  return (
    <>
      <GradientBackground />
      <section className="home">
        <Header />
        <SearchFreeCar />
      </section>
    </>
  );
}

export default Home;
