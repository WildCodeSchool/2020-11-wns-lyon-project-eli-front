import "./App.css";
import { Home } from "./components/home/home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";
import React from "react";
import { useAuthToken } from "./hooks/auth";
import { useCookies } from "react-cookie";
import AuthenticationForm from "./components/AuthenticationForm";
import { QuizzesList } from "./components/QuizzesList";
import { Quiz } from "./pages/Quiz";
import { ReactRouter } from "./router/router";
import { QuizEditor } from "./components/QuizEditor";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSortAlphaDown, faSortNumericDownAlt, faGripHorizontal, faSearch, faListUl, faFilter, faEllipsisV, faPlayCircle, faEye, faColumns, faPen, faTimes} from '@fortawesome/free-solid-svg-icons'
import { Dashboard } from './pages/Dashboard';

library.add(fab, faSortAlphaDown, faGripHorizontal, faSearch, faSortNumericDownAlt, faListUl, faFilter, faEllipsisV, faPlayCircle, faEye, faColumns, faPen, faTimes)

export const routes = [
  {
    path: "/",
    exact: true,
    main: ReactRouter,
  },
  {
    path: "/home",
    main: Dashboard,
  },
  {
    path: "/quiz",
    main: Quiz,
  },
];

function App(): JSX.Element {
  const [authToken] = useAuthToken();
  const [cookies] = useCookies(["user"]);

  return (
    <>
      <Router>
        <Switch>
          <Route
            exact
            path="/login"
            render={() =>
              !authToken || !cookies ? (
                <AuthenticationForm />
              ) : (
                <Redirect to="/home" />
              )
            }
          />
          <Route
            exact
            path="/"
            render={() =>
              !authToken || !cookies ? (
                <AuthenticationForm />
              ) : (
                <Redirect to="/home" />
              )
            }
          />

          {routes.map((route, i) =>
            !authToken || !cookies ? (
              <Redirect to="/login" />
            ) : (
              <Route
                key={i}
                {...route.exact}
                path={route.path}
                children={route.main}
              />
            )
          )}
        </Switch>
      </Router>
    </>
  );
}

export default App;
