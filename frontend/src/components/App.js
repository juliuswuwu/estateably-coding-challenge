import React from 'react';
import TransactionsFilter from './filter/TransactionsFilter';
import TransactionsTable from './table/TransactionsTable';
import CreateTransaction from './create/CreateTransaction';
import './App.css';

const App = () => {

  return (
    <div className="App">
      <header className="App-header">
        <img className="logo" src="https://uploads-ssl.webflow.com/5f8cd301c7688b13baf71568/5f8f7c0a813b9ec68d9994ad_Group%20129.svg" />
        <h1>Code Challenge</h1>
        <h2>Harry Higgins</h2>
      </header>
      <main>
        <div className="title">
          <h3>Account Transactions</h3>
        </div>
        <TransactionsFilter />
        <TransactionsTable />
        <CreateTransaction />
      </main>
    </div>
  );
}

export default App;
