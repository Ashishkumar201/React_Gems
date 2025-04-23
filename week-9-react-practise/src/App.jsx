import React from "react";
import { useState, useEffect } from "react";
import './App.css';

function App()
{
  return <div>
    <Counter></Counter>
    </div>  
}

function Counter()
{
  const [count, setcount]=useState(0);

  function increasecount()
  {
    setcount(count+1);
  }
  function decreasecount()
  {
    setcount(count-1);
  }
  function Reset(){
    setcount(0);
  }


  return <div className="container">
      <h1>{count}</h1>
      <button onClick={increasecount}>Increase count</button>
      <button onClick={decreasecount}>Decrease count</button> 
      <button onClick={Reset}>Reset the count</button> 
    </div>
}
  


export default App