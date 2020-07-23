import React from 'react';
import Routes from './Routes';
import './App.css';
import { Route } from 'react-router-dom';
import CartNav from './CartNav';

function App() {
  return (
    <div className='App'>
      <CartNav />
      <header className='App-header'>
        <Routes />
      </header>
    </div>
  );
}

export default App;
