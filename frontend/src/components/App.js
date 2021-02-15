// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchTransactions, createTransaction } from '../actions/transactions';
import FilterTransactionsForm from './FilterTransactionsForm';
import TransactionsTable from './TransactionsTable';
import TransactionForm from './TransactionForm';

function App() {
  const dispatch = useDispatch();

  const submit = values => {
    dispatch(createTransaction(values));
  }

  const filter = values => {
    dispatch(fetchTransactions(values));
  }

  return (
    <div className="App">
      <header className="App-header">
        <img className="logo" src="https://uploads-ssl.webflow.com/5f8cd301c7688b13baf71568/5f8f7c0a813b9ec68d9994ad_Group%20129.svg" />
        <h1>Code Challenge</h1>
        <h2>Harry Higgins</h2>
      </header>
      <main>
        <FilterTransactionsForm onSubmit={filter} />
        <TransactionsTable />
        <TransactionForm onSubmit={submit} />
      </main>
    </div>
  );
}

export default App;
