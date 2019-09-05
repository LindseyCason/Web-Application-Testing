import React from "react";
import { useState } from "react";

const Dashboard = ()=>{

    const [ballCount, setBallCount] = useState(0);
    const [strikeCount, setStrikeCount] = useState(0);
    const [foulCount, setFoulCount] = useState(0);
    const [hitCount, setHitCount] = useState(0);


    if(ballCount >= 3){
     setBallCount(0);
    }

    if(strikeCount > 2){
        setStrikeCount(0);
    }

    if(foulCount > 3){
        setFoulCount(0)
    }

    if(hitCount > 1){
        setHitCount(hitCount);
        // setStrikeCount(0) &&
        // setFoulCount(0);
    }
 

return(
<div className="buttons">
    <button onClick={()=> setBallCount(ballCount + 1)} className="BallButton">Ball Test {ballCount}</button>
    <button onClick={()=> setStrikeCount(strikeCount + 1)} className="StrikeButton">Strike Test {strikeCount}</button>
    <button onClick={()=> setFoulCount(foulCount + 1)} className="FoulButton">Foul Test {foulCount}</button>
    <button onClick={()=> setHitCount(hitCount + 1)} className="HitButton">Hit Test {hitCount}</button>
</div>
)
    };

export default Dashboard;









