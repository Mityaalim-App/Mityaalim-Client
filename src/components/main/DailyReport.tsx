import { ReactComponent as LeafOutline } from "../../assets/svgs/dashboard/leaf-outline.svg";
import { ReactComponent as Income } from "../../assets/svgs/dashboard/income.svg";
import { ReactComponent as Expense } from "../../assets/svgs/dashboard/expense.svg";
import { ReactComponent as NoTrans } from "../../assets/svgs/dashboard/no-trans.svg";

const DailyReport: React.FC = () => {
  return (
    <div className="daily-report">
      <div className="title">
        <h3>דיווח יומי</h3>
        <div className="leaves">
          <pre>15</pre>
          <LeafOutline />
        </div>
      </div>
      <div className="report-trans">
        <div className="tran">
          <Expense />
          <p>הוצאה</p>
        </div>
        <div className="tran">
          <NoTrans />
          <p>ללא תנועה</p>
        </div>
        <div className="tran">
          <Income />
          <p>הכנסה</p>
        </div>
      </div>
    </div>
  );
};

export default DailyReport;
