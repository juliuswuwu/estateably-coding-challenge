import React from 'react';
import { useDispatch } from 'react-redux';
import { createTransaction } from '../../actions/transactions';
import TransactionForm from './TransactionForm';
import './CreateTransaction.css';

const CreateTransaction = () => {
  const dispatch = useDispatch();

  const submit = values => {
    dispatch(createTransaction(values));
  }

  return (
    <div className='CreateTransaction'>
      <h4>Add New Transaction</h4>
      <TransactionForm onSubmit={submit} />
    </div>
  );
}

export default CreateTransaction;
