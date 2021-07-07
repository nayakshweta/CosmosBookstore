import React from 'react';
import { Routes } from './Routes';
import { NavBar } from './NavBar';
import { useNavbarFilters } from './useNavbarFilters';

function App() {
  const { filterQuery, rating, setRating, setFormat} = useNavbarFilters();

  const handleRating = (ratinginput) => {
      setRating((oldrating) => {
        if (oldrating === ratinginput) {
          return "0";
        }
        else return ratinginput;
      });
  }

  const handleFormat = (formatinput) => {
      setFormat((oldFormatInput) => {
        if (oldFormatInput == "") {
          return formatinput;
        } else  {
            const oldFormatList = Array.isArray(oldFormatInput) ? oldFormatInput : oldFormatInput.split(",");
            if (oldFormatList.includes(formatinput)) {
              var index = oldFormatList.indexOf(formatinput);
              if (index > -1) {
                oldFormatList.splice(index, 1);
              }
              return oldFormatList === [] ? "" : oldFormatList.join();
            }
            else {
              return oldFormatInput + "," + formatinput;
            }
          }
        }
      );
  }

  return (
    <main className="wrapper">
      <NavBar rating={rating} handleRating={(input)=> handleRating(input)} handleFormat={(e)=>handleFormat(e)}/>
      <Routes filterQuery={filterQuery}/>
    </main>
  );
}

export default App;
