import React, { useState } from 'react';
import "./App.css"

const App = () => {
  const letters = ['A', 'B', 'C', 'D', 'E'];
  const combinations = [];
  const [UserSearchLetters, setUserSearchLetters] = useState('')

  for (let a of letters) {
    for (let b of letters) {
      for (let c of letters) {
        for (let d of letters) {
          for (let e of letters) {
            const combination = a + b + c + d + e;
            combinations.push(combination);
          }
        }
      }
    }
  }
  const searchHandler = e => {
    setUserSearchLetters(e.target.value)
  }

  const FilteredData = combinations.filter(eachWordsOfLetters => eachWordsOfLetters.includes(UserSearchLetters.toUpperCase()));
  const lengthOFFilData = FilteredData.length

  return (
    <div className='main-container'>
          <input type='search' placeholder='You Can Search here' onChange={searchHandler}/>
          {UserSearchLetters.length >= 3 ? (<h3>Found {lengthOFFilData} Combinations</h3>) : ""}
        <div className='card-flex-container'>
          {UserSearchLetters.length >= 3 ?  ( FilteredData.map((combination, index) => (
            <div className='Cards-display'>
        <p key={index}>{index+1}:{combination}</p>
        </div>
          ))) : <h4>Please Enter 3 Letters</h4>
      // ))) : (
      //   combinations.map(eachCard => (
      //     <div className='Cards-display'>
      //       <p>{eachCard}</p>
      //     </div>
      //   ))
      // )
      
      }

        </div>
    </div>
  );
};

export default App;
