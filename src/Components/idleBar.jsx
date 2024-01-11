import { useState } from "react";
const IdleBar = (props) => {
    
    return (
        <div className='idle-group'>
            <div className="idle-bar-div" id="idleBarDiv">
                <div className="idle-progress-title">{props.name}</div>
                <div className="idle-bar" >
                    <div className="idle-progress" id="idleProgress" style={props.style}>
                    </div>
                    <p className="idle-bar-amount" id="idleBarPercent">{props.currency}</p>
                </div>
            </div>
            <div className="cost" id="idleAmountCostDisplay">
                <div className="coin-container">
                    <div>{props.name} Cost:</div>
                    <input type="button" onClick={props.onClick} className="btn idle-upgradeCost-button" value={props.cost} />
                </div>
            </div>
        </div>
    );
};

export default IdleBar