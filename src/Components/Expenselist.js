import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import ExpenseTransaction from "./ExpenseTransaction";

const Expenselist = () => {
  const { expenseTransactions } = useContext(GlobalContext);
  console.log(expenseTransactions);
  return (
    <div className="transactions transactions-expense">
      <h2>Transaction History</h2>
      <ul className="transaction-list">
        {expenseTransactions.map((expenseTransaction) => (
          <ExpenseTransaction
            key={expenseTransaction.id}
            expenseTransaction={expenseTransaction}
          />
        ))}
      </ul>
    </div>
  );
};

export default Expenselist;
