import GameFunction from '../../function/Game'
import IdleBar from '../../data/idleBar';
import { useState } from 'react';
const IdleGame = (props) => {
    const [idleAmount, setIdleAmount] = useState(props.props.bronze);
    
    return (
        <div>
            <h2 className="character-speak" id="characterSpeak">Welcome Mortal</h2>

            <IdleBar name='worker' currency={props.props.bronze} idleAmount={idleAmount}/>

            <p className="upgrade-title">New Feature</p>
            <p className="upgrade-text" id="nextUnlockDisplay">{props.nextUnlock}</p>
            <div className="cost" id="earnProgressCostDisplay">
                <div className="coin-container">
                    <div className="bronze-coin-border coin-border">
                        <div className="bronze-coin coin-img"><span className="coin-position">B</span></div>
                        <input type="button" onClick={GameFunction.earnProgress} className="btn idle-upgrade-button" value="Upgrade" />
                    </div>
                </div>
            </div>
        </div>
    )
};
export default IdleGame