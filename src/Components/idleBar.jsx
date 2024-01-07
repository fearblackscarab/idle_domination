import { useState } from "react";
const IdleBar = (props) => {

    //progress bar speed
    let idleBarSpeed = 250

    //display defaults
    let idleWidth = 0
    let style = {
        position: 'absolute',
        backgroundColor: 'darkred',
        height: '100%',
        width: `${idleWidth}%`,
        borderRadius: '5px',
        zIndex: '1'
    }

    //display state
    const [idleStyle, setIdleStyle] = useState(style)

    // run on page load
    window.addEventListener('load', e => {
        e.preventDefault();;
        props.interval(props.currency,idleWidth,idleStyle,idleBarSpeed)
        setIdleStyle(style)
    })

    return (
        <div className='idle-group'>
            <div className="idle-bar-div" id="idleBarDiv">
                <div className="idle-progress-title">{props.name}</div>
                <div className="idle-bar" >
                    <div className="idle-progress" id="idleProgress" style={idleStyle}>
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
    )
};

export default IdleBar