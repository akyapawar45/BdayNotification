import React, { useState } from "react";
import Data from "./Birthday";
import "./App.css";

const App = () => {
  const[data,setData]=useState(Data);
    return (
    <div className="main-container">
      <div className="body">
        <p className="title"> Today's Birthday {Data.length}😊</p>
        {data.map((x) => {
          return (
            <div className="container">
            <img src={x.img} alt="" ></img>
             <ruby>

             
	
             {x.age} 
          <rt>{x.name}</rt>  
        
              </ruby>
              
            </div>
          );
        })}
        <button onClick={()=>setData([])}>Clear</button>
      </div>
    </div>
  );
};

export default App;
