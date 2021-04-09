import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Dashboard } from './pages/Dashboard';

const App = (): JSX.Element => {
  return (
    <div className="App">
      <div className="p-0 m-0 box-border">
        <Dashboard></Dashboard>
      </div>
    </div>
  );
};

export default App;
