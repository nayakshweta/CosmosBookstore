import React from 'react';
import { Routes } from './Routes';
import { NavBar } from './NavBar';
import './App.css';

function App() {
  return (
    <main className="wrapper">
      <NavBar />
      <Routes />
    </main>
  );
}

export default App;
