import './Game'

const CheatFunction = () => {

    let cheat = false;

    //auto clicker
    const autoClicker = () => {
        greedClick();
        autoClick();
    };

    const autoClick = () => {
        if (cheat) {

            setTimeout(() => {
                autoClicker();
            }, 25);
        } else {
            alert('cheat is currently false');
            return
        }
    };

    //auto upgrade function
    const autoUpgrader = () => {
        plusOneUpgrade();
        plusFiveUpgrade();
        plusTenUpgrade();
        autoUpgrade();
        passiveAmountUpgrade();
        passiveSpeedUpgrade();
    };

    // auto upgrade call
    const autoUpgrade = () => {
        if (cheat) {
            setTimeout(() => {
                autoUpgrader()
            }, 25);
        } else {
            alert('cheat is currently false');
            return
        }
    };
};
export default CheatFunction