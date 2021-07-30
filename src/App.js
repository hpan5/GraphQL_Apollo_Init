import React, { useState } from 'react';
import ExchangeRates from './ExchangeRates';

const App = () => {
  const [myName, setMyName] = useState('Doris');
  const [nameText, setNameText] = useState('Doris');
  const handleNameInputChange = (evt) => {
    //evt.preventDefault();
    setNameText(evt.target.value);
    console.log("nameText:" + nameText);
  }
  const handleNameButtonClick = (evt) => {
    evt.preventDefault();
    setMyName(nameText);
    console.log("myName: " + myName);
  }
  return(
    <div className="app-class">
      <h2>{myName} first Apollo App</h2>
      <form>
        <button onClick={handleNameButtonClick}>ChangeMyName</button>
        <input value={nameText} onChange={handleNameInputChange}></input>
      </form>
      
    </div>
  )
}

export default App;
