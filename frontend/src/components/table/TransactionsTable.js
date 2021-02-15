import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchTransactions } from '../../actions/transactions';
import './TransactionsTable.css';

const TransactionsTable = props => {
  const transactions = useSelector(state => state.transactions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTransactions());
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
      {Object.keys(transactions).map(id => (
        <tr key={id}>
          <td>{transactions[id].createdAt}</td>
          <td>{transactions[id].description}</td>
          <td>{transactions[id].category}</td>
          <td>{transactions[id].value}</td>
        </tr>
      ))}
      </tbody>
    </table>
  );
}

export default TransactionsTable;
