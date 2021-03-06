import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import "./styles.css";
import Header from "./components/Header";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Post from "./pages/Post";
import NotFound from "./pages/NotFound";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route
            render={({ location }) => (
              <TransitionGroup className="container">
                <CSSTransition
                  appear={true}
                  key={location.key}
                  timeout={{ enter: 400, exit: 200 }}
                  classNames="fade"
                >
                  <div className="inner">
                    <Switch key={location.key} location={location}>
                      <Route exact path="/" component={Home} />
                      <Route path="/about" component={About} />
                      <Route path="/contact" component={Contact} />
                      <Route path="/post/:id" component={Post} />
                      <Route component={NotFound} />
                    </Switch>
                  </div>
                </CSSTransition>
              </TransitionGroup>
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
