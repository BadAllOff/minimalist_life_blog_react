import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import AboutMe from "./pages/about_me";
import RecentPosts from "./pages/recent_posts";
import NotFound from "./pages/not_found";

export function App() {
  return (
    <>
      <Router basename={"/"}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about_me">
            <AboutMe />
          </Route>
          <Route path="/recent_posts">
            <RecentPosts />
          </Route>
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}
