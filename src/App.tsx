import './App.css';
import { AuthGate } from './utils/AuthGate';
import React from 'react';

const App = (): JSX.Element => {
  return (
    <>
      <AuthGate />
    </>
  );
};

export default App;
