import React from "react";
import Dashboard from "./dashboard"

export const Display = ()=>{

    return(
    <div className="dashboard">
        <div className="Title">Baseball Counter</div>
        <div className="TotalBalls">Balls: 0</div>
        <div className="TotalStrikes">Strikes: 0</div>
        <section className="Buttons">
            <button>Strike</button>
            <button>Ball</button>
            <button>Foul</button>
            <button>Hit</button>
            <button className="StrikeButton" onClick={balls}>Dirty Bird Touchdown</button>
        </section>
    </div>)
    
    }
    