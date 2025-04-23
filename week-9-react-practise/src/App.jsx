import React from "react";
import { useState, useEffect } from "react";
import './App.css';

function App()
{
  let countervisible=true;

  return <div>
    <Counter></Counter>
    {/* rendering the counter function in the main/default application in react */}
  </div>
  
  //creating a timer where the conditionaly rendering takes place after an interval of 5 seconds
}

function Counter()
  {
    const [count,setcount]=useState(0);

    useEffect(function(){
      setInterval(function(){
        setcount(count=>count+1);
      }, 1000);
    },[]);
    
    function increase()
    {
      setcount(count+1);
    }

  return <div>
    <h1>{count}</h1>
    <button onClick={increase}>increase</button>
  </div>
  }

export default App


// {
//   let countervisible =true;
//   return <div>
    

//     {countervisible ? <Counter></Counter>:null}
//     {countervisible && <Counter></Counter>}
    
//     </div>  
// }

// function Counter()
// {
//   const [count, setcount]=useState(0);
//   function reset()
//   {
//     setcount(0);
//   }
//   console.log("counter"); 

//   useEffect(function (){
//     setInterval(function() {
//       setcount(count=>count+1);
      
//     }, 1000);
//   },[]);

//   return <div className="container">
//       <h1>{count}</h1>
//       <button onClick={reset}>Reset </button>
      
//     </div>
// }