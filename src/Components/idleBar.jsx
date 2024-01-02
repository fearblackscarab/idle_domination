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

    return (
        <div className='idle-group'>
            <div className="idle-bar-div" id="idleBarDiv">
                <div className="idle-progress-title">{props.name}</div>
                <div className="idle-bar">
                    <div className="idle-progress" id="idleProgress">
                    </div>
                    <p className="idle-bar-amount" id="idleBarPercent">{props.currency}</p>
                </div>
            </div>
            <div className="cost" id="idleAmountCostDisplay">
                <div className="coin-container">
                    {/* <div className="bronze-coin-border coin-border">
                        <div className="bronze-coin coin-img"><span className="coin-position">B</span></div> */}
                        <div>{props.name} Cost:</div>
                        <input type="button" onClick={props.onClick} className="btn idle-upgradeCost-button" value={props.cost} />
                    {/* </div> */}
                </div>
            </div>
        </div>
    )
};

export default IdleBar