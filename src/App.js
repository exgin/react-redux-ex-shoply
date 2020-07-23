import React from 'react';
import Routes from './Routes';
import './App.css';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Routes />
      </header>
    </div>
  );
}

export default App;
