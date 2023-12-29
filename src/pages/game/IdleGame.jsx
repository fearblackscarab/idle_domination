import GameFunction from '../../function/Game'
const IdleGame = (props) => {
    return (
        <div>
            <header className="character-speak" id="characterSpeak">Welcome Mortal</header>

            <div className='first bar'>
                <div className="idle-bar-div" id="idleBarDiv">
                    <div className="idle-progress-title">Anti-Idle
                    </div>
                    <div className="idle-bar">
                        <div className="idle-progress" id="idleProgress">
                        </div>
                        <p className="idle-bar-percent" id="idleBarPercent">0%</p>
                    </div>
                </div>
                <input type="button" onClick={GameFunction.earnProgress} className="btn idle-upgrade-button" value="Upgrade" />
                <div className="cost" id="earnProgressCostDisplay">cost:${props.earnProgressCost}</div>
            </div>
            <p className="upgrade-text">Increase progress speed</p>
            <input type='button' onClick={GameFunction.speedProgress} className="btn idle-upgrade-button" value="Upgrade" />
            <div className="cost" id="speedProgressCostDisplay">cost:${props.speedProgressCost}</div>

            <p className="upgrade-title">New Feature</p>
            <p className="upgrade-text" id="nextUnlockDisplay">${props.nextUnlock}</p>
            <input type='button' onClick={GameFunction.unlockFeature} className="btn idle-upgrade-button" value="Upgrade" />
            <div className="cost" id="unlockFeatureCostDisplay">cost:${props.unlockFeatureCost}</div>
        </div>
    )
};
export default IdleGame