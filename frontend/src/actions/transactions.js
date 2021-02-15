export const SET_TRANSACTIONS = "transactions/SET_TRANSACTIONS";

export const setTransactions = transactions => ({
  type: SET_TRANSACTIONS,
  transactions
});

export const fetchTransactions = () => async (dispatch) => {
  const response = await fetch(`/api/transactions`);

  console.log(response);

  if (response.ok) {
    const transactions = await response.json();
    dispatch(setTransactions(transactions));
  }
}