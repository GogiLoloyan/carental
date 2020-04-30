import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import  './helper/LoadBefore'
import "./App.scss";

import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";

import LooseCars from "./components/other/loose-cars/LooseCars";
import AutoParts from "./components/other/auto-parts/AutoParts";
import Partners from "./components/other/partners/Partners";

import LoadPage from "./LoadPage";

function App() {
  const [loading, setLoading] = React.useState(true);
  React.useEffect(
    () =>
      setTimeout(() => {
        setLoading(false);
      }, 3600),
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
            {/* this pages havn't main page's design */}
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
