import React from 'react';
import {Header} from './components/Header';
import {Balance} from './components/Balance';
import {AccountSummary} from './components/AccountSummary';
import {TransactionHistory} from './components/TransactionHistory';
import {AddTransaction} from './components/AddTransaction'
/* import logo from './logo.svg';
import './App.css'; */

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance/>
        <AccountSummary/>
        <TransactionHistory/>
        <AddTransaction/>
      </div>     
    </div>
  );
}

export default App;
