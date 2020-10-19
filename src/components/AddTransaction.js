import React, { useContext, useState } from "react";
import { addTransaction } from "../context/Actions";
import { GlobalContext } from "../context/GlobalContext";
import uuid from "uuid/dist/v1";

function AddTransaction() {
  const { dispatch } = useContext(GlobalContext);
  const initialData = {
    text: "",
    amount: "",
  };
  const [formData, setFormData] = useState(initialData);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date();

    const newTransaction = {
      id: uuid(),
      text: formData.text,
      amount: +formData.amount,
      date: date.toDateString(),
      time: date.toLocaleTimeString(),
    };
    dispatch(addTransaction(newTransaction));

    setFormData(initialData);
  };

  return (
    <>
      <h3>Add New Transaction</h3>
      <form onSubmit={handleSubmit} name="form">
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            name="text"
            id="text"
            placeholder="Enter text.."
            value={formData.text}
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income){" "}
          </label>
          <input
            type="number"
            name="amount"
            id="amount"
            placeholder="Enter Amount..."
            value={formData.amount}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn">
          Add Transaction
        </button>
      </form>
    </>
  );
}

export default AddTransaction;
