import Balance from "./Balance";
import DailyReport from "./DailyReport";
import WeeklyTasks from "./WeeklyTasks";
import Traget from "./Target";

import { ReactComponent as BrandingImg } from "../../assets/svgs/dashboard/summary.svg";

const Dashboard: React.FC = () => {
  return (
    <section className="dashboard">
      <div className="float-img">
        <BrandingImg />
      </div>
      <Balance />
      <DailyReport />
      <WeeklyTasks />
      <Traget />
    </section>
  );
};

export default Dashboard;
