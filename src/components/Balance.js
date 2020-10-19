import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import CurrencyFormat from "react-currency-format";

function Balance() {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  /* 
  >> The reduce() method reduces the array to a single value.
  >> The reduce() method executes a provided function for each value of the array (from left-to-right).
  >> The return value of the function is stored in an accumulator (result/total).
  -- array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
  
  */
  const total = amounts
    .reduce((total, currentVal) => (total += currentVal), 0)
    .toFixed(2);

  return (
    <>
      <h4>Your Balance</h4>
      <h1>
        <CurrencyFormat
          value={total}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"₹"}
        />
      </h1>
    </>
  );
}

export default Balance;
