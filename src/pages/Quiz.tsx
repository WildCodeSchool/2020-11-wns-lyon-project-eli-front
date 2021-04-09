import React from "react";
import { BrowserRouter as Router, Link, Route, Switch, useRouteMatch } from "react-router-dom";
import { QuizEditor } from "../components/QuizEditor";
import { QuizzesList } from "../components/QuizzesList";

export const Quiz = (): JSX.Element => {
  // The `path` lets us build <Route> paths that are
  // relative to the parent route, while the `url` lets
  // us build relative links.
  let { path, url } = useRouteMatch();

  return (
    <section className="w-full ml-48 flex-col bg-gradient-to-r from-green-300 via-green-200 via-green-100 to-blue-100">
      <Router>
        <header className="w-full my-10 flex justify-around">
          <Link to="/quiz" className="bg-white bg-opacity-30 rounded shadow py-2 px-4 transform transition duration-900 hover:scale-105 focus:ring-2 focus:ring-blue-300">Collection</Link>
          <Link to={`${url}/create`} className="bg-white bg-opacity-30 rounded shadow py-2 px-4 transform transition duration-900 hover:scale-105 focus:ring-2 focus:ring-blue-300">Quiz Editor</Link>
        </header>

        <Switch>
          <Route exact path={path} component={QuizzesList} />
          <Route path={`${path}/:slug`} component={QuizEditor} />
          {/*<Route exact path="/quizEditor" component={QuizEditor} />*/}
        </Switch>
      </Router>
    </section>
  );
};
