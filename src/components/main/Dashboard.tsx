import Balance from "./Balance";
import DailyReport from "./DailyReport";
import Navbar from "./Navbar";

import { ReactComponent as BrandingImg } from "../../assets/svgs/dashboard/summary.svg";
import WeeklyTasks from "./WeeklyTasks";
import Traget from "./Target";

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
