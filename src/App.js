import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';

export function App() {
  return (
    <Router>
        <Switch>
            <Route path="/recent">
                <p>I will be the recent posts page</p>
            </Route>
            <Route path="/sbout">
                <p>I will be about me page</p>
            </Route>
            <Route path="/">
                <p>I am going to be a Minimalist Life style blog written on react</p>
            </Route>
        </Switch>
    </Router>
  );
}