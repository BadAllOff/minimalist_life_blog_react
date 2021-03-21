import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import AboutMe from "./pages/about_me";
import RecentPosts from "./pages/recent_posts";
import "normalize.css";
import GlobalStyle from "./globalStyles";
export function App() {
  return (
    <>
      <GlobalStyle />
      <Router basename={"/"}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/recent_posts">
            <RecentPosts />
          </Route>
          <Route path="/about_me">
            <AboutMe />
          </Route>
          {/* {implement not found page} */}
        </Switch>
      </Router>
    </>
  );
}
