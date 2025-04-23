import React from "react";
import { useState, useEffect } from "react";
import './App.css';

function App()
{
  let countervisible =true;
  return <div>
    

    {countervisible ? <Counter></Counter>:null}
    {countervisible && <Counter></Counter>}
    
    </div>  
}

function Counter()
{
  const [count, setcount]=useState(0);
  function reset()
  {
    setcount(0);
  }
  console.log("counter"); 

  useEffect(function (){
    setInterval(function() {
      setcount(count=>count+1);
      
    }, 1000);
  },[]);

  return <div className="container">
      <h1>{count}</h1>
      <button onClick={reset}>Reset </button>
      
    </div>
}
  


export default App