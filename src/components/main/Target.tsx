import { utilsService } from "../../services/utilsService";
import { userService } from "../../services/userService";

import ProgressBar from "./progress-bar";

import { ReactComponent as LeafOutline } from "../../assets/svgs/dashboard/leaf-outline.svg";

import user from "../../data/user.json";

const Traget: React.FC = () => {
  const balance = userService.getMonthlyBalance();

  return (
    <div className="target">
      <div className="title">
        <h3>{utilsService.getHebMonth()}</h3>
        <div className="leaves">
          <pre>125</pre>
          <LeafOutline />
        </div>
      </div>
      <ProgressBar />
      <div className="left">
        <h5>נותר לך להוצאות:</h5>
        <div className="total">
          <h2>
            {(balance.income - balance.expenses - user.target).toLocaleString()}
          </h2>
          <button className="more-details">לאן הולך הכסף?</button>
        </div>
      </div>
    </div>
  );
};

export default Traget;
