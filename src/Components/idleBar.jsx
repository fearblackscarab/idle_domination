import { useState } from "react";
const IdleBar = (props) => {
    // will need to find a balance with the cost for the amount earned increasing the amount available per upgradeCost later on
    // const [idleAmount, setIdleAmount] = useState(1);
    // Will need to find a balanced cost calculation that isn't to low early on and not to high later on

    // idle bar speed should use a numberic value between 1-10 and will have a check somewhere to decide the speed based on what the value currently is
    // const [idleBarSpeed, setIdleBarSpeed] = useState(0);

    // Maxed output of worker, any further upgradeCosts increase in cost but add a new worker
    // const [idleBarMaxed, setIdleBarMaxed] = useState(False);

    // number of workers
    // const [workerCount, setWorkerCount] = useState(1);
    let idleBarSpeed = 25
    let idleWidth = 0
    let style = {
        position: 'absolute',
        backgroundColor: 'darkred',
        height: '100%',
        width: `${idleWidth}%`,
        borderRadius: '5px',
        zIndex: '1'
    }
    const [idleStyle, setIdleStyle] = useState(style)
    // const [idleProgressWidth, setIdleProgressWidth] = useState(idleWidth);
    const idleInterval = () => {
        if (props.currency > 0) {
            setTimeout(() => {
                if (idleWidth < 100) {
                    //progress bar
                    idleWidth++
                    // console.log(idleWidth)

                } else if (idleWidth == 100) {
                    // restart Progress
                    idleWidth = 0
                    // console.log('100')

                } else {
                    console.log(`error ${idleWidth}`)
                }
                setIdleStyle({ ...idleStyle, width: `${idleWidth}%` })
                return idleInterval()
            }, idleBarSpeed);
        }
    }

    window.addEventListener('load', e => {
        e.preventDefault();;
        idleInterval();
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