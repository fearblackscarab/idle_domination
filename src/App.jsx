// import {Routes,Route} from 'react-router-dom'
import { useState } from 'react';
// import Header from './header/Header';
// import Home from './pages/Home';
import GameFunction from './function/Game';
import Footer from './footer/footer';
import './App.css';
import IdleBar from './Components/idleBar';

function App(props) {
    // bronze 
    let bronze = 1
    const [bronzeCurrency, setBronzeCurrency] = useState(bronze);
    let bronzeCost = 1
    const [bronzeCurrentCost, setBronzeCurrentCost] = useState(bronzeCost);
    let bronzeEarn = 1
    const [bronzeCurrentEarn, setBronzeCurrentEarn] = useState(bronzeEarn);

    const bronzeUpgrade = () => {
        if (bronzeCurrency >= bronzeCurrentCost) {
            setBronzeCurrency((prev) => prev - bronzeCurrentCost);
            if (bronzeCurrentCost <= 10) {
                setBronzeCurrentCost((prev) => prev + 4);
            } else {
                setBronzeCurrentCost((prev) => prev * 2 + 4);
            }
            setBronzeCurrentEarn((prev) => prev + 1);
        };
    };

    //silver
    let silver = 1
    const [silverCurrency, setSilverCurrency] = useState(silver);
    let silverCost = 1
    const [silverCurrentCost, setSilverCurrentCost] = useState(silverCost);
    let silverEarn = 1
    const [silverCurrentEarn, setSilverCurrentEarn] = useState(silverEarn);

    const silverUpgrade = () => {
        if (silverCurrency >= silverCurrentCost) {
            setSilverCurrency((prev) => prev - silverCurrentCost);
            if (silverCurrentCost <= 10) {
                setSilverCurrentCost((prev) => prev + 4);
            } else {
                setSilverCurrentCost((prev) => prev * 2 + 4);
            }
            setSilverCurrentEarn((prev) => prev + 1);
        };
    };

    // gold

    let gold = 1
    const [goldCurrency, setGoldCurrency] = useState(gold);
    let goldCost = 1
    const [goldCurrentCost, setGoldCurrentCost] = useState(goldCost);
    let goldEarn = 1
    const [goldCurrentEarn, setGoldCurrentEarn] = useState(goldEarn);

    const goldUpgrade = () => {
        if (goldCurrency >= goldCurrentCost) {
            setGoldCurrency((prev) => prev - goldCurrentCost);
            if (goldCurrentCost <= 10) {
                setGoldCurrentCost((prev) => prev + 4);
            } else {
                setGoldCurrentCost((prev) => prev * 2 + 4);
            }
            setGoldCurrentEarn((prev) => prev + 1);
        };
    };

    // platinum

    let platinum = 1
    const [platinumCurrency, setPlatinumCurrency] = useState(platinum);
    let platinumCost = 1
    const [platinumCurrentCost, setPlatinumCurrentCost] = useState(platinumCost);
    let platinumEarn = 1
    const [platinumCurrentEarn, setPlatinumCurrentEarn] = useState(platinumEarn);

    const platinumUpgrade = () => {
        if (platinumCurrency >= platinumCurrentCost) {
            setPlatinumCurrency((prev) => prev - platinumCurrentCost);
            if (platinumCurrentCost <= 10) {
                setPlatinumCurrentCost((prev) => prev + 4);
            } else {
                setPlatinumCurrentCost((prev) => prev * 2 + 4);
            }
            setPlatinumCurrentEarn((prev) => prev + 1);
        };
    };

    // saphire

    let saphire = 1
    const [saphireCurrency, setSaphireCurrency] = useState(saphire);
    let saphireCost = 1
    const [saphireCurrentCost, setSaphireCurrentCost] = useState(saphireCost);
    let saphireEarn = 1
    const [saphireCurrentEarn, setSaphireCurrentEarn] = useState(saphireEarn);

    const saphireUpgrade = () => {
        if (saphireCurrency >= saphireCurrentCost) {
            setSaphireCurrency((prev) => prev - saphireCurrentCost);
            if (saphireCurrentCost <= 10) {
                setSaphireCurrentCost((prev) => prev + 4);
            } else {
                setSaphireCurrentCost((prev) => prev * 2 + 4);
            }
            setSaphireCurrentEarn((prev) => prev + 1);
        };
    };

    // emerald

    let emerald = 1
    const [emeraldCurrency, setEmeraldCurrency] = useState(emerald);
    let emeraldCost = 1
    const [emeraldCurrentCost, setEmeraldCurrentCost] = useState(emeraldCost);
    let emeraldEarn = 1
    const [emeraldCurrentEarn, setEmeraldCurrentEarn] = useState(emeraldEarn);

    const emeraldUpgrade = () => {
        if (emeraldCurrency >= emeraldCurrentCost) {
            setEmeraldCurrency((prev) => prev - emeraldCurrentCost);
            if (emeraldCurrentCost <= 10) {
                setEmeraldCurrentCost((prev) => prev + 4);
            } else {
                setEmeraldCurrentCost((prev) => prev * 2 + 4);
            }
            setEmeraldCurrentEarn((prev) => prev + 1);
        };
    };

    // ruby

    let ruby = 1
    const [rubyCurrency, setRubyCurrency] = useState(ruby);
    let rubyCost = 1
    const [rubyCurrentCost, setRubyCurrentCost] = useState(rubyCost);
    let rubyEarn = 1
    const [rubyCurrentEarn, setRubyCurrentEarn] = useState(rubyEarn);

    const rubyUpgrade = () => {
        if (rubyCurrency >= rubyCurrentCost) {
            setRubyCurrency((prev) => prev - rubyCurrentCost);
            if (rubyCurrentCost <= 10) {
                setRubyCurrentCost((prev) => prev + 4);
            } else {
                setRubyCurrentCost((prev) => prev * 2 + 4);
            }
            setRubyCurrentEarn((prev) => prev + 1);
        };
    };

    // diamond 

    let diamond = 1
    const [diamondCurrency, setDiamondCurrency] = useState(diamond);
    let diamondCost = 1
    const [diamondCurrentCost, setDiamondCurrentCost] = useState(diamondCost);
    let diamondEarn = 1
    const [diamondCurrentEarn, setDiamondCurrentEarn] = useState(diamondEarn);

    const diamondUpgrade = () => {
        if (diamondCurrency >= diamondCurrentCost) {
            setDiamondCurrency((prev) => prev - diamondCurrentCost);
            if (diamondCurrentCost <= 10) {
                setDiamondCurrentCost((prev) => prev + 4);
            } else {
                setDiamondCurrentCost((prev) => prev * 2 + 4);
            }
            setDiamondCurrentEarn((prev) => prev + 1);
        };
    };

    return (
        <div>
            {/* <Header bronze={bronzeCurrency} silver={silverCurrency} gold={goldCurrency} platinum={platinumCurrency} saphire={saphireCurrency} emerald={emeraldCurrency} ruby={rubyCurrency} diamond={diamondCurrency} /> */}
            <header className="header" id="header">
                <div className="container">
                    <div className="row">
                        {/* <!-- display currency's --> */}
                        <div className="currency-div col-4" id="currenctDiv">
                            <div className="row">
                                {/* <!-- primary currency --> */}
                                <div className="col-6">
                                    <div className="row">
                                        <div className="coin-container col-4">
                                            <div className="bronze-coin-border coin-border">
                                                <div className="bronze-coin coin-img"><span className="coin-position">Y</span></div>
                                            </div>
                                        </div>
                                        <div className="coin-text col-8" id="bronzeCoin">{bronzeCurrency}</div>
                                    </div>
                                </div>
                                {/* <!-- secondary currency --> */}
                                <div className="col-6">
                                    <div className="row">
                                        <div className="coin-container col-4">
                                            <div className="green-coin-border coin-border">
                                                <div className="green-coin coin-img"><span className="coin-position">G</span></div>
                                            </div>
                                        </div>
                                        <div className="coin-text col-8" id="greenCoin">0</div>
                                    </div>
                                </div>
                                {/* <!-- rare currency --> */}
                                <div className="col-6">
                                    <div className="row">
                                        <div className="coin-container col-4">
                                            <div className="white-coin-border coin-border">
                                                <div className="white-coin coin-img"><span className="coin-position">W</span></div>
                                            </div>
                                        </div>
                                        <div className="coin-text col-8" id="whiteCoin">0</div>
                                    </div>
                                </div>
                                {/* <!-- idle currency --> */}
                                <div className="col-6">
                                    <div className="row">
                                        <div className="coin-container col-4">
                                            <div className="blue-coin-border coin-border">
                                                <div className="blue-coin coin-img"><span className="coin-position">B</span></div>
                                            </div>
                                        </div>
                                        <div className="coin-text col-8" id="blueCoin">0</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="name-title-div col-3">
                            <div className="name" id="name">@username
                            </div>
                            <div className="title" id="title">
                                no-title
                            </div>
                        </div>
                        <div className="exp-bar-div col-5">
                            {/* <!-- div inside div that will increase in width base on xp till next lvl --> */}
                            <div className="exp-bar" title="experience Bar" id="expBar">
                                <div className="exp-progress" id="expProgress">
                                </div>
                                <div className="exp-text" id="expText"> <span id="currentExp">0</span>/<span
                                    id="toNextLvl">10</span></div>
                                <img className="img-fluid lvl-star" src="/image_assets/lvlStar.PNG" alt="level star" />
                                <div className="lvl-display" id="lvlDisplay">0</div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* <Home bronze={bronzeCurrency} silver={silverCurrency} gold={goldCurrency} platinum={platinumCurrency} saphire={saphireCurrency} emerald={emeraldCurrency} ruby={rubyCurrency} diamond={diamondCurrency} /> */}
            <main className="main" id="main">
                {/* <!-- aligns the game area with the idle bar --> */}
                <div className="game-align">
                    <div className="container">
                        <div className="row">
                            {/* <!-- main game area --> */}
                            <div className="game-area-div col-12">
                                <div className="game-area" id="gameArea">
                                    <div>
                                        <h2 className="character-speak" id="characterSpeak">Welcome Mortal</h2>

                                        {/* <IdleBar name='worker' currency={props.props.bronze} idleAmount={idleAmount} /> */}
                                        <IdleBar name='bronze' currency={bronzeCurrentEarn} onClick={bronzeUpgrade} cost={bronzeCurrentCost} />
                                        <IdleBar name='silver' currency={silverCurrentEarn} onClick={silverUpgrade} cost={silverCurrentCost} />
                                        <IdleBar name='gold' currency={goldCurrentEarn} onClick={goldUpgrade} cost={goldCurrentCost} />
                                        <IdleBar name='platinum' currency={platinumCurrentEarn} onClick={platinumUpgrade} cost={platinumCurrentCost} />
                                        <IdleBar name='saphire' currency={saphireCurrentEarn} onClick={saphireUpgrade} cost={saphireCurrentCost} />
                                        <IdleBar name='emerald' currency={emeraldCurrentEarn} onClick={emeraldUpgrade} cost={emeraldCurrentCost} />
                                        <IdleBar name='ruby' currency={rubyCurrentEarn} onClick={rubyUpgrade} cost={rubyCurrentCost} />
                                        <IdleBar name='diamond' currency={diamondCurrentEarn} onClick={diamondUpgrade} cost={diamondCurrentCost} />

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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="sound-display" id="soundDisplay">
                    SOUND:OFF
                </div>
                <div className="cheat-display" id="cheatDisplay">
                </div> */}
            </main>
            <Footer />
        </div>
    )
};

export default App;