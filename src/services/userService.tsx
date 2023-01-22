import { httpService } from "./httpService";
import user from "../data/user.json";

export const userService = {
  signup,
  getMonthlyBalance,
};

async function signup(userCred: object) {
  try {
    console.log("service", userCred);
    // const user = await httpService.post("auth/signup", userCred);
  } catch (err) {
    console.log(err);
  }
}

function getMonthlyBalance() {
  const month = new Date().getMonth();
  const { reports } = user;

  const monthTrans = reports.filter(
    (tran) => new Date(tran.date).getMonth() === month
  );

  return monthTrans.reduce(
    (acc, tran) => {
      if (tran.type === "income") acc.income += tran.amount;
      if (tran.type === "expense") acc.expenses += tran.amount;
      return acc;
    },
    { income: 0, expenses: 0 }
  );
}
