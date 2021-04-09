import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Quiz } from "../pages/Quiz";
import { Navbar } from "../components/_NavBar";
import { Home } from "../components/home/home";
import { QuizEditor } from "../components/QuizEditor";

import { routes } from '../App';

export function ReactRouter(): JSX.Element {
  return (
    <section className="min-h-screen flex flex-nowrap bg-gray-50">
      <Router>
        <Navbar />
        <header className="h-50 fixed top-0 right-0 border border-gray-700">
          <p>UserName</p>
        </header>
        <Switch>
          {routes.map((route, index) => (
            // Render more <Route>s with the same paths as
            // above, but different components this time.
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              children={<route.main />}
            />
          ))}
          {/*<Route path="/quiz/create" component={QuizEditor} />
          <Route path="/quiz" component={Quiz} />
          <Route exact path="/" component={Home} />*/}
        </Switch>
      </Router>
    </section>
  );
}
