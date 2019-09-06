import React from "react";

const Display = (props)=>{

    return(

    <div className="display">
      <h1>AT BAT TRACKER</h1>
      <div className="balls">
      <p>Ball Count:</p>
      <div className="bCount">{props.balls}</div>
    </div>



    <div className="strikes">
      <p>Strike Count:</p>
      <div className="sCount">{props.strikes}</div>
    </div>
       
    </div>)
    
    }
    
    export default Display;