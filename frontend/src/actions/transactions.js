export const RECEIVE_TRANSACTIONS = "transactions/RECEIVE_TRANSACTIONS";
export const RECEIVE_NEW_TRANSACTION = "transactions/RECEIVE_NEW_TRANSACTION";
export const RECEIVE_ERRORS = "transactions/RECEIVE_ERRORS";

export const receiveTransactions = transactions => ({
  type: RECEIVE_TRANSACTIONS,
  transactions
});

export const receiveNewTransaction = transaction => ({
  type: RECEIVE_NEW_TRANSACTION,
  transaction
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const fetchTransactions = (values={}) => async (dispatch) => {
  const { description, category, value } = values;
  
  let queryString = '?';
  if (category && category !== 'Select a category...') {
    queryString += `category=${category}&`;
  }
  if (description) {
    queryString += `description=${description}&`;
  }
  if (value) {
    queryString += `value=${value}`;
  }

  const response = await fetch(`/api/transactions${queryString}`);
  
  if (response.ok) {
    const transactions = await response.json();
    dispatch(receiveTransactions(transactions));
  } else {
    const errors = await response.json();
    dispatch(receiveErrors(errors));
  }
}

export const createTransaction = (values) => async (dispatch) => {
  const response = await fetch('/api/transactions', {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(values),
  });

  if (response.ok) {
    const transaction = await response.json();
    dispatch(receiveNewTransaction(transaction));
  } else {
    const errors = await response.json();
    dispatch(receiveErrors(errors));
  }
}