import { ReactComponent as LogoText } from "../../assets/svgs/dashboard/mityaalim-text-icon.svg";
import { ReactComponent as Leaf } from "../../assets/svgs/dashboard/leaf.svg";
import { ReactComponent as Coin } from "../../assets/svgs/dashboard/coin.svg";

import user from "../../data/user.json";

const Navbar: React.FC = () => {
  return (
    <header>
      <div className="logo-container">
        <LogoText />
      </div>
      <div className="score-status">
        <div className="coins">
          <h3>{user.coins.toLocaleString()}</h3>
          <Coin />
        </div>
        <div className="leaves">
          <h3>{user.leaves.toLocaleString()}</h3>
          <Leaf />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
