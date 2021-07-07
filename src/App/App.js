import React from 'react';
import { Routes } from './Routes';
import { NavBar } from './NavBar';
import { useNavbarFilters } from './useNavbarFilters';

function App() {
  const { filterQuery, setRating, setFormat} = useNavbarFilters();

  const handleRating = (ratinginput) => {
      setRating(ratinginput);
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
      <NavBar handleRating={(input)=> handleRating(input)} handleFormat={(e)=>handleFormat(e)}/>
      <Routes filterQuery={filterQuery}/>
    </main>
  );
}

export default App;
