import React, { useState } from "react";
import Dashboard from "./dashboard"

const Display = (props)=>{

    return(

    <div className="display">
      Ball Count: {props.balls}
      Strike Count: {props.strikes}
       <Dashboard />
    </div>)
    
    }
    
    export default Display;