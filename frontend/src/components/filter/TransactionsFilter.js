import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchTransactions } from '../../actions/transactions';
import FilterTransactionsForm from './FilterTransactionsForm';
import './TransactionsFilter.css';

const  TransactionsFilter = () => {
  const dispatch = useDispatch();

  const filter = values => {
    dispatch(fetchTransactions(values));
  }

  return (
    <div className='TransactionsFilter'>
      <h4>Apply Filters</h4>
      <FilterTransactionsForm onSubmit={filter} />
    </div>
  );
}

export default TransactionsFilter;
