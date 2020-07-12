export default (state, action) => {
  switch (action.type) {
    case "ADD_INCOME":
      return {
        ...state, //first we return the state
        incomeTransactions: [action.payload, ...state.incomeTransactions],
      };
    case "ADD_EXPENSE":
      return {
        ...state,
        expenseTransactions: [action.payload, ...state.expenseTransactions],
      };
    case "DELETE_TRANSACTION":
      return {
        ...state,

        incomeTransactions: state.incomeTransactions.filter(
          //we had the incometRANSATION with state.incomeTransavtions
          (incomeTransaction) => incomeTransaction.id !== action.payload
        ),
        expenseTransactions: state.expenseTransactions.filter(
          //we had the expensetRANSATION with state.expenseTransavtions
          (expenseTransaction) => expenseTransaction.id !== action.payload
        ),
      };

    default:
      return state;
  }
};
