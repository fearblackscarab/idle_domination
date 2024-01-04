// import {Routes,Route} from 'react-router-dom'
import { useState } from 'react';
// import Header from './header/Header';
// import Home from './pages/Home';
import GameFunction from './function/Game';
import Footer from './footer/footer';
import './App.css';
import IdleBar from './Components/idleBar';

function App(props) {
    // currencys?
    // meat
    // coin
    // gems
    // units/underlings
    // send on hunts?

// bars
// Demon Ranks
    //Mizunoe (壬), Kanoto( 辛), Kanoe (庚), Tsuchinoto (己), Tsuchinoe (戊), Hinoto (丁), Hinoe(丙), Kinoto (乙), and Kinoe (甲).

    // mizunoe 
    let mizunoe = 100
    const [mizunoeCurrency, setMizunoeCurrency] = useState(mizunoe);
    let mizunoeCost = 1
    const [mizunoeCurrentCost, setMizunoeCurrentCost] = useState(mizunoeCost);
    let mizunoeEarn = 1
    const [mizunoeCurrentEarn, setMizunoeCurrentEarn] = useState(mizunoeEarn);

    const mizunoeUpgrade = () => {
        if (mizunoeCurrency >= mizunoeCurrentCost) {
            setMizunoeCurrency((prev) => prev - mizunoeCurrentCost);
            if (mizunoeCurrentCost <= 10) {
                setMizunoeCurrentCost((prev) => prev + 1);
            } else {
                setMizunoeCurrentCost((prev) => prev * 2 + 4);
            }
            setMizunoeCurrentEarn((prev) => prev + 1);
        };
    };

    //kanoto
    // let kanoto = 0
    // const [kanotoCurrency, setKanotoCurrency] = useState(mizunoeEarn);
    let kanotoCost = 1
    const [kanotoCurrentCost, setKanotoCurrentCost] = useState(kanotoCost);
    let kanotoEarn = 0
    const [kanotoCurrentEarn, setKanotoCurrentEarn] = useState(kanotoEarn);

    const kanotoUpgrade = () => {
        if (mizunoeCurrentEarn >= kanotoCurrentCost) {
            setMizunoeCurrentEarn((prev) => prev - kanotoCurrentCost);
            if (kanotoCurrentCost <= 10) {
                setKanotoCurrentCost((prev) => prev + 1);
            } else {
                setKanotoCurrentCost((prev) => prev * 2 + 4);
            }
            setKanotoCurrentEarn((prev) => prev + 1);
        };
    };

    // kanoe

    let kanoe = 0
    const [kanoeCurrency, setKanoeCurrency] = useState(kanoe);
    let kanoeCost = 1
    const [kanoeCurrentCost, setKanoeCurrentCost] = useState(kanoeCost);
    let kanoeEarn = 0
    const [kanoeCurrentEarn, setKanoeCurrentEarn] = useState(kanoeEarn);

    const kanoeUpgrade = () => {
        if (kanoeCurrency >= kanoeCurrentCost) {
            setKanoeCurrency((prev) => prev - kanoeCurrentCost);
            if (kanoeCurrentCost <= 10) {
                setKanoeCurrentCost((prev) => prev + 4);
            } else {
                setKanoeCurrentCost((prev) => prev * 2 + 4);
            }
            setKanoeCurrentEarn((prev) => prev + 1);
        };
    };

    // tsuchinoto

    let tsuchinoto = 0
    const [tsuchinotoCurrency, setTsuchinotoCurrency] = useState(tsuchinoto);
    let tsuchinotoCost = 1
    const [tsuchinotoCurrentCost, setTsuchinotoCurrentCost] = useState(tsuchinotoCost);
    let tsuchinotoEarn = 0
    const [tsuchinotoCurrentEarn, setTsuchinotoCurrentEarn] = useState(tsuchinotoEarn);

    const tsuchinotoUpgrade = () => {
        if (tsuchinotoCurrency >= tsuchinotoCurrentCost) {
            setTsuchinotoCurrency((prev) => prev - tsuchinotoCurrentCost);
            if (tsuchinotoCurrentCost <= 10) {
                setTsuchinotoCurrentCost((prev) => prev + 4);
            } else {
                setTsuchinotoCurrentCost((prev) => prev * 2 + 4);
            }
            setTsuchinotoCurrentEarn((prev) => prev + 1);
        };
    };

    // tsuchinoe

    let tsuchinoe = 0
    const [tsuchinoeCurrency, setTsuchinoeCurrency] = useState(tsuchinoe);
    let tsuchinoeCost = 1
    const [tsuchinoeCurrentCost, setTsuchinoeCurrentCost] = useState(tsuchinoeCost);
    let tsuchinoeEarn = 0
    const [tsuchinoeCurrentEarn, setTsuchinoeCurrentEarn] = useState(tsuchinoeEarn);

    const tsuchinoeUpgrade = () => {
        if (tsuchinoeCurrency >= tsuchinoeCurrentCost) {
            setTsuchinoeCurrency((prev) => prev - tsuchinoeCurrentCost);
            if (tsuchinoeCurrentCost <= 10) {
                setTsuchinoeCurrentCost((prev) => prev + 4);
            } else {
                setTsuchinoeCurrentCost((prev) => prev * 2 + 4);
            }
            setTsuchinoeCurrentEarn((prev) => prev + 1);
        };
    };

    // hinoto

    let hinoto = 0
    const [hinotoCurrency, setHinotoCurrency] = useState(hinoto);
    let hinotoCost = 1
    const [hinotoCurrentCost, setHinotoCurrentCost] = useState(hinotoCost);
    let hinotoEarn = 0
    const [hinotoCurrentEarn, setHinotoCurrentEarn] = useState(hinotoEarn);

    const hinotoUpgrade = () => {
        if (hinotoCurrency >= hinotoCurrentCost) {
            setHinotoCurrency((prev) => prev - hinotoCurrentCost);
            if (hinotoCurrentCost <= 10) {
                setHinotoCurrentCost((prev) => prev + 4);
            } else {
                setHinotoCurrentCost((prev) => prev * 2 + 4);
            }
            setHinotoCurrentEarn((prev) => prev + 1);
        };
    };

    // hinoe

    let hinoe = 0
    const [hinoeCurrency, setHinoeCurrency] = useState(hinoe);
    let hinoeCost = 1
    const [hinoeCurrentCost, setHinoeCurrentCost] = useState(hinoeCost);
    let hinoeEarn = 0
    const [hinoeCurrentEarn, setHinoeCurrentEarn] = useState(hinoeEarn);

    const hinoeUpgrade = () => {
        if (hinoeCurrency >= hinoeCurrentCost) {
            setHinoeCurrency((prev) => prev - hinoeCurrentCost);
            if (hinoeCurrentCost <= 10) {
                setHinoeCurrentCost((prev) => prev + 4);
            } else {
                setHinoeCurrentCost((prev) => prev * 2 + 4);
            }
            setHinoeCurrentEarn((prev) => prev + 1);
        };
    };

    // kinoto

    let kinoto = 0
    const [kinotoCurrency, setKinotoCurrency] = useState(kinoto);
    let kinotoCost = 1
    const [kinotoCurrentCost, setKinotoCurrentCost] = useState(kinotoCost);
    let kinotoEarn = 0
    const [kinotoCurrentEarn, setKinotoCurrentEarn] = useState(kinotoEarn);

    const kinotoUpgrade = () => {
        if (kinotoCurrency >= kinotoCurrentCost) {
            setKinotoCurrency((prev) => prev - kinotoCurrentCost);
            if (kinotoCurrentCost <= 10) {
                setKinotoCurrentCost((prev) => prev + 4);
            } else {
                setKinotoCurrentCost((prev) => prev * 2 + 4);
            }
            setKinotoCurrentEarn((prev) => prev + 1);
        };
    };

    // kinoe

    let kinoe = 0
    const [kinoeCurrency, setKinoeCurrency] = useState(kinoe);
    let kinoeCost = 1
    const [kinoeCurrentCost, setKinoeCurrentCost] = useState(kinoeCost);
    let kinoeEarn = 0
    const [kinoeCurrentEarn, setKinoeCurrentEarn] = useState(kinoeEarn);

    const kinoeUpgrade = () => {
        if (kinoeCurrency >= kinoeCurrentCost) {
            setKinoeCurrency((prev) => prev - kinoeCurrentCost);
            if (kinoeCurrentCost <= 10) {
                setKinoeCurrentCost((prev) => prev + 4);
            } else {
                setKinoeCurrentCost((prev) => prev * 2 + 4);
            }
            setKinoeCurrentEarn((prev) => prev + 1);
        };
    };

    // end bars

    // idle bar progress with time delay
    const barProgress = () =>{
        

    }

    return (
        <div>
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
                                        <div className="coin-text col-8" id="bronzeCoin">{mizunoeCurrency}</div>
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

                                        <IdleBar name='Mizunoe' currency={mizunoeCurrentEarn} onClick={mizunoeUpgrade} cost={mizunoeCurrentCost} />

                                        <IdleBar name='Kanoto' currency={kanotoCurrentEarn} onClick={kanotoUpgrade} cost={kanotoCurrentCost} />

                                        <IdleBar name='Kanoe' currency={kanoeCurrentEarn} onClick={kanoeUpgrade} cost={kanoeCurrentCost} />

                                        <IdleBar name='Tsuchinoto' currency={tsuchinotoCurrentEarn} onClick={tsuchinotoUpgrade} cost={tsuchinotoCurrentCost} />

                                        <IdleBar name='Tsuchinoe' currency={tsuchinoeCurrentEarn} onClick={tsuchinoeUpgrade} cost={tsuchinoeCurrentCost} />

                                        <IdleBar name='Hinoto' currency={hinotoCurrentEarn} onClick={hinotoUpgrade} cost={hinotoCurrentCost} />

                                        <IdleBar name='Hinoe' currency={hinoeCurrentEarn} onClick={hinoeUpgrade} cost={hinoeCurrentCost} />

                                        <IdleBar name='Kinoto' currency={kinotoCurrentEarn} onClick={kinotoUpgrade} cost={kinotoCurrentCost} />

                                        <IdleBar name='Kinoe' currency={kinoeCurrentEarn} onClick={kinoeUpgrade} cost={kinoeCurrentCost} />

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