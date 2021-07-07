import React from 'react';
import { Routes } from './Routes';
import { NavBar } from './NavBar';
import { useNavbarFilters } from './useNavbarFilters';

function App() {
  const { filterQuery, setRating} = useNavbarFilters();

  const handleRating = (input) => {
      setRating(input);
  }

  return (
    <main className="wrapper">
      <NavBar handleRating={(input)=> handleRating(input)}/>
      <Routes filterQuery={filterQuery}/>
    </main>
  );
}

export default App;
