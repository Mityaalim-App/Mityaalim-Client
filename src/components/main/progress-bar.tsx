import { userService } from "../../services/userService";
import user from "../../data/user.json";

const ProgressBar: React.FC = () => {
  const balance = userService.getMonthlyBalance();

  const targetLoc = (balance.income - user.target) * 0.01;

  console.log("user.target", user.target);
  console.log("balance.income", balance.income);
  console.log("targetLoc", targetLoc);

  const labelLoc = () => {
    if (targetLoc < 25) return 0;
    else if (targetLoc < 75) return "33%";
    else return "66%";
  };

  return (
    <div className="progress-bar">
      <div className="main-bar">
        <div className="mini-bar income">
          <h4 className="income">
            מתוך <span>{balance.income.toLocaleString()}</span>
          </h4>
          <div className="income-bar"></div>
        </div>
        <div className="mini-bar expenses">
          <h4 className="expenses">
            הוצאת <span>{balance.expense.toLocaleString()}</span>
          </h4>
          <div
            className="expenses-bar"
            style={{ width: `${(balance.expense / balance.income) * 100}%` }}
          ></div>
        </div>
      </div>
      <div className="goal">
        <div className="line" style={{ right: targetLoc + "%" }}></div>
        <div className="triangle" style={{ right: targetLoc + "%" }}></div>
        {/* <div className="label" style={{ right: labelLoc() }}> */}
        <div className="label" style={{ right: labelLoc() }}>
          <h4>
            היעד <span>{user.target.toLocaleString()}</span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;

// import { useState, useEffect } from "react";
// import { Slider } from "@material-ui/core";

// import { userService } from "../../services/userService";
// import user from "../../data/user.json";

// const ProgressBar: React.FC = () => {
//   const { income, expense } = userService.getMonthlyBalance();
//   const [value, setValue] = useState(user.target);

//   // useEffect(() => {
//   //   const elLabel = document.querySelector(".PrivateValueLabel-circle-9");
//   //   console.log(typeof elLabel);

//   //   if (elLabel !== null) {
//   //     elLabel.innerHTML = `היעד ${value}`;
//   //   }
//   // }, []);

//   const labelText = () => {
//     return `היעד ${value} ₪`;
//   };

//   // const changeValue = (e: any) => {
//   //   console.log(e);

//   //   setValue(80);
//   // };

//   return (
//     <div className="progress-bar">
//       <progress id="progress-bar" max={income} value={value}></progress>
//       <label htmlFor="progress-bar">
//         היעד {value} <span>₪</span>
//       </label>
//       {/* <Slider
//         className="target-label"
//         value={value}
//         min={0}
//         max={income}
//         valueLabelDisplay="on"
//         track={false}
//         // aria-label="Always visible"
//         // aria-valuetext="היעד הוא"

//         // getAriaValueText={labelText}
//         // track="inverted"

//         // onChange={(e) => changeValue(e)}
//       /> */}
//     </div>
//   );
// };

// export default ProgressBar;
