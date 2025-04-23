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
  const[count,setcount]=useState(0);
  console.log("counter");
  useEffect(function(){
    console.log("counted");
    setInterval(function()  {
      setcount(count=>count+1);
      
    }, 1000);
  },[]);

  

  


  return <div className="container">
      <h1>{count}</h1>
      
    </div>
}
  


export default App