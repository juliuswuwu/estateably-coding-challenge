export const RECEIVE_TRANSACTIONS = "transactions/RECEIVE_TRANSACTIONS";
export const RECEIVE_NEW_TRANSACTION = "transactions/RECEIVE_NEW_TRANSACTION";

export const receiveTransactions = transactions => ({
  type: RECEIVE_TRANSACTIONS,
  transactions
});

export const receiveNewTransaction = transaction => ({
  type: RECEIVE_NEW_TRANSACTION,
  transaction
})

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
  }
}