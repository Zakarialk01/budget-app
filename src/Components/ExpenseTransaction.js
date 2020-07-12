import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

function ExpenseTransaction({ expenseTransaction }) {
  const { deletetransaction } = useContext(GlobalContext);
  return (
    <li className="transaction">
      <span className="transaction-text">{expenseTransaction.expenseText}</span>
      <span className="transaction-amount">
        ${expenseTransaction.expenseAmount}
      </span>
      <button
        className="delete-btn"
        onClick={() => deletetransaction(expenseTransaction.id)} //this function has the id as parameter
      >
        <i className="fas fa-trash"></i>
      </button>
    </li>
  );
}

export default ExpenseTransaction;
