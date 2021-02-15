// import logo from './logo.svg';
// import './App.css';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchTransactions, createTransaction } from '../actions/transactions';
import TransactionForm from './TransactionForm';

function App() {
  const transactions = useSelector(state => state.transactions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTransactions());
  }, []);

  const submit = values => {
    console.log(values);
    dispatch(createTransaction(values));
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Estateably Code Challenge</h1>
      </header>
      <div>
        <ul>
          {Object.keys(transactions).map(id => (
            <li key="id">{`${transactions[id].description}, ${transactions[id].category}, ${transactions[id].value}`}</li>
          ))}
        </ul>
      </div>
      <TransactionForm onSubmit={submit} />
    </div>
  );
}

export default App;
