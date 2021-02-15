import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import moment from 'moment'
import { fetchTransactions } from '../../actions/transactions';
import './TransactionsTable.css';

const TransactionsTable = props => {
  const transactions = useSelector(state => state.transactions);
  const dispatch = useDispatch();
  const moneyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })

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
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
      {Object.keys(transactions).map(id => (
        <tr key={id}>
          <td>{moment(transactions[id].createdAt).format('ll')}</td>
          <td>{transactions[id].description}</td>
          <td>{transactions[id].category}</td>
          <td className="value">{moneyFormat.format(transactions[id].value)}</td>
        </tr>
      ))}
      </tbody>
    </table>
  );
}

export default TransactionsTable;
