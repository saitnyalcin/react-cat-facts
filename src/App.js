import React from 'react';
import logo from '../src/images/catie.png';
import './App.css';
import Cats from './components/Cats';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>This API provides endpoints to get random cat facts.</p>
      </header>
      <div>
        <Cats />
      </div>
    </div>
  );
}

export default App;
