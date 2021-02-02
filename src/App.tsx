import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import { useCookies } from 'react-cookie';
import { useAuthToken } from './hooks/auth';

const App = (): JSX.Element => {
  const [authToken] = useAuthToken();
  const [cookies] = useCookies(['user']);

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/login" render={() => (!authToken || !cookies ? <LoginPage /> : <Redirect to="/" />)} />
          <Route
            path="/"
            render={() =>
              authToken && cookies ? (
                <>
                  <Route exact path="/" component={Dashboard} />
                </>
              ) : (
                <Redirect to="/login" />
              )
            }
          />
        </Switch>
      </Router>
    </>
  );
};

export default App;
