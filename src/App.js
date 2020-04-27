import React from "react";
import { BrowserRouter as Router, Switch, Route, useLocation } from "react-router-dom";
import "./App.scss";

import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";

import LooseCars from "./components/other/loose-cars/LooseCars";
import AutoParts from "./components/other/auto-parts/AutoParts";
import Partners from "./components/other/partners/Partners";

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        {/* this pages havn't main page's design */}
        <Route path="/services/loose-cars" component={LooseCars} />
        <Route path="/services/auto-parts" component={AutoParts} />
        <Route path="/partners" component={Partners} />;
        {/* main pages */}
        <Route path="/" component={Main} />
      </Switch>
    </Router>
  );
}

export default App;
