import { SET_TRANSACTIONS } from '../actions/transactions';

const TransactionsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case SET_TRANSACTIONS:
      action.transactions.forEach(transaction => {
        newState[transaction._id] = transaction;
      });
      return newState;

    default:
      return state;
  }
}

export default TransactionsReducer;