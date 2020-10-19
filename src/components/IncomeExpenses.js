import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import CurrencyFormat from "react-currency-format";

function IncomeExpenses() {
  const { transactions } = useContext(GlobalContext);

  /* 
  #Farzi-kaam
  const incomes = transactions.map((transaction) => {
    if (transaction.amount > 0) return transaction.amount;
    else return 0;
  });
  const expenses = transactions.map((transaction) => {
    if (transaction.amount < 0) return transaction.amount;
    else return 0;
  });

  console.log(incomes, expenses);

  const totalIncome = incomes
    .reduce((total, currentVal) => (total += currentVal), 0)
    .toFixed(2);
  const totalExpense = expenses
    .reduce((total, currentVal) => (total += currentVal), 0)
    .toFixed(2);
 */

  const amounts = transactions.map((transaction) => transaction.amount);
  const totalIncome = amounts
    .filter((item) => item > 0)
    .reduce((total, currentVal) => (total += currentVal), 0)
    .toFixed(2);

  const totalExpense = amounts
    .filter((item) => item < 0)
    .reduce((total, currentVal) => (total += currentVal), 0)
    .toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">
          +
          <CurrencyFormat
            value={totalIncome}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₹"}
          />
        </p>
      </div>
      <div>
        <h4>Expenses</h4>
        <p className="money minus">
          -
          <CurrencyFormat
            value={Math.abs(totalExpense)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₹"}
          />
        </p>
      </div>
    </div>
  );
}

export default IncomeExpenses;
