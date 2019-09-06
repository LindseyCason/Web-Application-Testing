import React from "react";
import { useState } from "react";
import Display from "./display"

const Dashboard = ()=>{

    const [ballCount, setBallCount] = useState(0);
    const [strikeCount, setStrikeCount] = useState(0);
    const [foulCount, setFoulCount] = useState(0);


    if(ballCount > 3){
     setBallCount(0);
    }

    if(strikeCount > 2){
        setStrikeCount(0);
    }

    const foul = () =>{

        if(foulCount <= 2 ){
            setStrikeCount(strikeCount + 1)
        }
        if(strikeCount === 1){
            setStrikeCount(2);
        }
        if(strikeCount === 2){
            setStrikeCount(2)
        }

    }


    const reset = () => {
        setBallCount(0);
        setFoulCount(0);
        setStrikeCount(0);
    }
 

    // const scores = {
    //     balls: {ballCount},
    //     strikes: {strikeCount}
    // }
 
return(


    
<div className="buttons">
    <Display
        balls={ballCount}
        strikes={strikeCount}
    />
    <button onClick={()=> setBallCount(ballCount + 1)} className="BallButton">Ball</button> 
    <button onClick={()=> setStrikeCount(strikeCount + 1)} className="StrikeButton">Strike</button>
    <button onClick={()=> (foul())} className="FoulButton">Foul</button>
    <button onClick={()=> (reset())} className="HitButton">Hit</button>
</div>


)
    };

export default Dashboard;









