import { ReactComponent as Clouds } from "../../assets/svgs/dashboard/clouds.svg";

import user from "../../data/user.json";
import { utilsService } from "../../services/utilsService";

const Balance: React.FC = () => {
  return (
    <div className="summary">
      <pre className="date">{utilsService.getDateString()}</pre>
      <div className="summary-box">
        <div className="svg-bg">
          <Clouds />
        </div>
        <div className="summary-text">
          <h3>{user.name}</h3>
          <h4>
            מתחילת ההתייעלות <br /> חסכתם
            <span>{user.coins.toLocaleString()}</span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Balance;
