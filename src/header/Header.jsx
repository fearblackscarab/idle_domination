import { useState } from "react";
const Header = (props) => {
  const [bronze, setBronze] = useState(props.bronze);
    return (
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
                                    <div className="coin-text col-8" id="bronzeCoin">{bronze}</div>
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
    )
};

export default Header;