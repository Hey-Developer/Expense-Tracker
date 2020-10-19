import React, { useContext } from "react";
import { deleteTransaction } from "../context/Actions";
import { GlobalContext } from "../context/GlobalContext";
import CurrencyFormat from "react-currency-format";

function Transaction({ transaction }) {
  const sign = transaction.amount < 0 ? "-" : "+";

  const { dispatch } = useContext(GlobalContext);
  const handleClick = (id) => {
    dispatch(deleteTransaction(id));
  };
  return (
    <li className={sign === "-" ? "minus" : "plus"}>
      <div className="transaction-details">
        {transaction.text}
        <span>
          {sign}
          <CurrencyFormat
            value={Math.abs(transaction.amount)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₹"}
          />
        </span>
        <button
          className="delete-btn"
          onClick={() => {
            handleClick(transaction.id);
          }}>
          x
        </button>
      </div>

      <div className="transaction-time">
        <small>{transaction.date}</small>,&nbsp;
        <small>{transaction.time}</small>
      </div>
    </li>
  );
}

export default Transaction;
