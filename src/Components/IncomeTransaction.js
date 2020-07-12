import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

function IncomeTransaction({ incomeTransaction }) {
  const { deletetransaction } = useContext(GlobalContext);

  return (
    <li className="transaction">
      <span className="transaction-text">{incomeTransaction.incomeText}</span>
      <span className="transaction-amount">
        ${incomeTransaction.incomeAmount}
      </span>
      <button
        className="delete-btn"
        onClick={() => deletetransaction(incomeTransaction.id)}
      >
        <i className="fas fa-trash"></i>
      </button>
    </li>
  );
}

export default IncomeTransaction;
