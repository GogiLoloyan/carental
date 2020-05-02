import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import * as imgs from "./helper/LoadBefore";
import "./App.scss";

import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";

import LooseCars from "./components/other/loose-cars/LooseCars";
import AutoParts from "./components/other/auto-parts/AutoParts";
import Partners from "./components/other/partners/Partners";

import LoadPage from "./LoadPage";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(
    () =>
      window.addEventListener("load", () =>
        setTimeout(() => {
          setLoading(false);
        }, 2000)
      ),
    []
  );
  return (
    <Router>
      {loading ? (
        <LoadPage />
      ) : (
        <>
          <Navbar />
          <Switch>
            <Route path="/services/loose-cars" component={LooseCars} />
            <Route path="/services/auto-parts" component={AutoParts} />
            <Route path="/partners" component={Partners} />;{/* main pages */}
            <Route path="/" component={Main} />
          </Switch>
        </>
      )}
    </Router>
  );
}

export default App;
