export const ADD_TRANSACTION = "ADD_TRANSACTION";
export const DELETE_TRANSACTION = "DELETE_TRANSACTION";

export const addTransaction = (transaction) => {
  return {
    type: ADD_TRANSACTION,
    payload: transaction,
  };
};

export const deleteTransaction = (transaction_id) => {
  return {
    type: DELETE_TRANSACTION,
    payload: transaction_id,
  };
};
