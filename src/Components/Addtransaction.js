import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { GlobalContext } from "../Context/GlobalState";

const Addtransaction = () => {
  const { addIncome, addexpense } = useContext(GlobalContext); //we calletby passing addIncom in GlobalContext.Provider in Globalstate
  const [income, setIncome] = useState({ incomeText: "", incomeAmount: 0 });

  const incomeonchange = (e) => {
    setIncome({ ...income, [e.target.name]: e.target.value });

    console.log(income);
  };
  const { incomeAmount, incomeText } = income;
  const onSubmitincome = (e) => {
    e.preventDefault();
    const newIncomeTransaction = {
      id: uuidv4(), //,npm insatll uuid to generate a unique id to each income
      incomeText,
      incomeAmount: incomeAmount * 1, //to parse it to a number
    };
    console.log(newIncomeTransaction); //after that we go to Globalstate to Add an Income
    addIncome(newIncomeTransaction); //will containt the newIncomeTransaction
    setIncome({ incomeText: "", incomeAmount: 0 }); //to refresh the input after enter the values we add to input value={incomeText } the same for other input
  };
  const [expense, setExpense] = useState({ expenseText: "", expenseAmount: 0 });

  const expenseonchange = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });

    console.log(expense);
  };
  const { expenseAmount, expenseText } = expense;
  const onSubmitexpense = (e) => {
    e.preventDefault();
    const newexpenseTransaction = {
      id: uuidv4(), //,npm insatll uuid to generate a unique id to each expense
      expenseText,
      expenseAmount: expenseAmount * 1, //to parse it to a number
    };
    console.log(newexpenseTransaction); //after that we go to Globalstate to Add an expense
    addexpense(newexpenseTransaction); //will containt the newexpenseTransaction
    setExpense({ expenseText: "", expenseAmount: 0 });
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={onSubmitincome}>
        <div className="input-group income">
          <input
            type="text"
            placeholder="add Income..."
            name="incomeText"
            autoComplete="off"
            value={incomeText}
            onChange={incomeonchange}
          />
          <input
            type="number"
            placeholder="Amount"
            name="incomeAmount"
            autoComplete="off"
            value={incomeAmount}
            onChange={incomeonchange}
          />
          <input type="submit" value="Submit" />
        </div>
      </form>
      <form onSubmit={onSubmitexpense}>
        <div className="input-group expense">
          <input
            type="text"
            placeholder="add expense..."
            autoComplete="off"
            name="expenseText"
            value={expenseText}
            onChange={expenseonchange}
          />
          <input
            type="number"
            placeholder="Amount"
            autoComplete="off"
            name="expenseAmount"
            value={expenseAmount}
            onChange={expenseonchange}
          />
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default Addtransaction;
