import React, {useState} from 'react';
import {Message} from './message.js';
import './App.css';




 function App() {

  let [Count , setCount] = useState(1);
  let [isMorning , Setmorning] = useState(true);  
    
  return (
   
    <div className={`box ${isMorning ? 'box1' : ''}`}>
  <h2>Have a Good = { isMorning ? 'Morning' : 'Night' }</h2>
  <Message Counter={Count}></Message>
  <button onClick={ ()=> setCount(++Count) }  >
    Update
  </button>
  <button onClick={ ()=> Setmorning(!isMorning) }  >
    change day
  </button>
  </div>
  );
}

export default App;
