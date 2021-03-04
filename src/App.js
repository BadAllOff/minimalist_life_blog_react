import React from "react";
import { HashRouter as Router, Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./pages/home";
import "normalize.css";
import GlobalStyle from "./globalStyles";
export function App() {
  return (
    <>
      <GlobalStyle />
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/recent">
            <p>I will be the recent posts page</p>
          </Route>
          <Route path="/sbout">
            <p>I will be about me page</p>
          </Route>
          {/* {implement not found page} */}
        </Switch>
      </Router>
    </>
  );
}
