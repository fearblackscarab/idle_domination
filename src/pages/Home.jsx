import { Route, Routes } from "react-router-dom";
import IdleGame from "./game/IdleGame";
import '../function/Game'
import '../function/Cheat'
import '../Data'
import { useState } from "react";
const Home = (props) => {
    const [game, setGame] = useState('idle');
    const [sound, setSound] = useState(false);
    return (
        <main className="main" id="main">
            {/* <!-- aligns the game area with the idle bar --> */}
            <div className="game-align">
                <div className="container">
                    <div className="row">
                        {/* <!-- main game area --> */}
                        <div className="game-area-div col-12">
                            <div className="game-area" id="gameArea">
                                <Routes>
                                    <Route path='/' element={<IdleGame props={props} />} />
                                </Routes>
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