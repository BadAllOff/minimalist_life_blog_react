import React from "react";
import { HashRouter as Router, Switch } from "react-router-dom";
import { Route } from "react-router-dom";

export function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/">
          <p>I am going to be a Minimalist Life style blog written on React</p>
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
  );
}
