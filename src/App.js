import React from 'react';
import logo from './logo.svg';
import './App.css';
import Spinner from './Spinner';
import ErrorDemo from './ErrorDemo';
import UserAxiosSpinner from './UseAxiosSpinner';

function App() {
  return (
    <div className="App">
      <UserAxiosSpinner/>
      <Spinner />
      <ErrorDemo />
    </div>
  );
}

export default App;
