// import logo from './logo.svg';
// import './App.css';
import TransactionForm from './TransactionForm';

function App() {
  const submit = values => {
    console.log(values);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Estateably Code Challenge</h1>
      </header>
      <TransactionForm onSubmit={submit} />
    </div>
  );
}

export default App;
