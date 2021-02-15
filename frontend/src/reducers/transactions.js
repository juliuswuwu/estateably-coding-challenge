import { RECEIVE_TRANSACTIONS, RECEIVE_NEW_TRANSACTION } from '../actions/transactions';

const TransactionsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  
  switch (action.type) {
    case RECEIVE_TRANSACTIONS:
      action.transactions.forEach(transaction => {
        newState[transaction._id] = transaction;
      });
      return newState;

    case RECEIVE_NEW_TRANSACTION:
      newState[action.transaction._id] = action.transaction;
      return newState;

    default:
      return state;
  }
}

export default TransactionsReducer;