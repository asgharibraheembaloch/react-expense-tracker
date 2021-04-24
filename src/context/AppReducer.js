export default (state, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    case "UPDATE_TRANSACTION":
      const index = state.transactions.findIndex(
        (transaction) => transaction.id === action.payload.id
      );
      let arrayCopy = [...state.transactions];
      arrayCopy[index].description = action.payload.description;
      arrayCopy[index].amount = +action.payload.amount;
      return {
        ...state,
        transactions: arrayCopy,
      };
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
