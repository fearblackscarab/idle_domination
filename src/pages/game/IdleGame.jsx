import GameFunction from '../../function/Game'
const IdleGame = (props) => {
    return (
        <div>
            <p className="character-speak" id="characterSpeak">Welcome Mortal</p>

            <p className="upgrade-title">Progress bar upgrades</p>
            <p className="upgrade-text">Increase yellow coins earned</p>
            <input type="button" onClick={GameFunction.earnProgress} className="btn idle-upgrade-button" value="Upgrade" />
            <div className="cost" id="earnProgressCostDisplay">cost:${props.earnProgressCost}</div>

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