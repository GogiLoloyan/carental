import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
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
