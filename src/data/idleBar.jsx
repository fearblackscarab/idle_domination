import { useState } from "react";

const IdleBar = (props) => {
    // idle interval auto increase currency
    const [currency, setCurrency] = useState(props.currency);


    // will need to find a balance with the cost for the amount earned increasing the amount available per upgradeCost later on
    // const [idleAmount, setIdleAmount] = useState(1);
    // Will need to find a balanced cost calculation that isn't to low early on and not to high later on
    const [idleAmountCost, setIdleAmountCost] = useState(1);

    // idle bar speed should use a numberic value between 1-10 and will have a check somewhere to decide the speed based on what the value currently is
    // const [idleBarSpeed, setIdleBarSpeed] = useState(0);
    
    // Maxed output of worker, any further upgradeCosts increase in cost but add a new worker
    // const [idleBarMaxed, setIdleBarMaxed] = useState(False);

    // number of workers
    // const [workerCount, setWorkerCount] = useState(1);


    const upgradeCost = () => {
        if (currency >= idleAmountCost) {
            setCurrency((prev) =>prev-idleAmountCost);
            if (idleAmountCost <= 10) {
                setIdleAmountCost((prev) => prev+4);
            } else {
                setIdleAmountCost((prev) => prev*2);
            }
        };
        props.idleAmount + 1;
    };

    return(
        <div className='idle-group'>
                <div className="idle-bar-div" id="idleBarDiv">
                    <div className="idle-progress-title">{props.name}</div>
                    <div className="idle-bar">
                        <div className="idle-progress" id="idleProgress">
                        </div>
                        <p className="idle-bar-amount" id="idleBarPercent">{currency}</p>
                    </div>
                </div>
                <div className="cost" id="idleAmountCostDisplay">
                    <div className="coin-container">
                        <div className="bronze-coin-border coin-border">
                            <div className="bronze-coin coin-img"><span className="coin-position">B</span></div>
                            <input type="button" onClick={upgradeCost} className="btn idle-upgradeCost-button" value={idleAmountCost} />
                        </div>
                    </div>
                </div>
            </div>
    )
};

export default IdleBar