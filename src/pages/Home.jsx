import { Route, Routes } from "react-router-dom";
import IdleGame from "./game/IdleGame";
IdleGame
const Home = (props) => {
    return (
        <main className="main" id="main">
            {/* <!-- aligns the game area with the idle bar --> */}
            <div className="game-align">
                <div className="container">
                    <div className="row">
                        {/* <!-- main game area --> */}
                        <div className="game-area-div col-8">
                            <div className="game-area" id="gameArea">
                                <Routes>
                                    <Route path='/' element={<IdleGame props={props}/>} />
                                </Routes>
                            </div>
                        </div>
                        {/* <!-- idle side bar --> */}
                        {/* <div className="bd-tutorial" id="bdTutorial">
                        </div> */}
                        <div className="idle-bar-div col-3" id="idleBarDiv">
                            <div className="idle-progress-title">Anti-Idle
                            </div>
                            <div className="idle-bar">
                                <div className="idle-progress" id="idleProgress">
                                </div>
                                <p className="idle-bar-percent" id="idleBarPercent">0%</p>
                            </div>
                            <div className="idle-toggle" id="idleToggle">
                                <div className="idle-toggle-title" id="idleToggleTitle">IDLE MODE</div>
                                <div className="idle-toggle-status" id="idleToggleStatus">OFF</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sound-display" id="soundDisplay">
                SOUND:OFF
            </div>
            <div className="cheat-display" id="cheatDisplay">
            </div>
        </main>
    )
};
export default Home;