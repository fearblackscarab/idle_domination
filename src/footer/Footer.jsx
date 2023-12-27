import GameFunction from '../function/Game'
import CheatFunction from '../function/Cheat';

const Footer = () => {
    return (
        <footer className="footer" id="footer">
            {/* <!-- sidebar footer from bootstrap --> */}
            <nav className="navbar navbar-light fixed-bottom bot-nav">
                <div className="container-fluid g-0">
                    <div className="row col-12 g-0">
                        <button className="navbar-toggler col-1 footer-items text-center" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <a className="navbar-brand col-12 footer-items text-center" href="#">Menu</a>
                    </div>
                    <div className="offcanvas offcanvas-end offcanvas-style" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">More Tools Coming Soon</h5>
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                {/* <!-- <li className="nav-item side-nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Stats</a>
                            </li> --> */}
                                <li><input type="button" className="dropdown-item dropdown-text" onClick={GameFunction.soundToggle} value="Toggle Sound" /></li>
                                <li className="nav-item side-nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Cheats
                                    </a>
                                    <ul className="dropdown-menu side-dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
                                        <li><input type="button" className="dropdown-item dropdown-text" onClick={CheatFunction.autoClick} value="Auto Click" /></li>
                                        <li><input type="button" className="dropdown-item dropdown-text" onClick={CheatFunction.autoUpgrade} value="Auto Upgrade" /></li>
                                        <li><input type="button" className="dropdown-item dropdown-text" onClick={GameFunction.cheatUnlocked} value="Cheat Toggle" /></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </footer>
    )
};
export default Footer;