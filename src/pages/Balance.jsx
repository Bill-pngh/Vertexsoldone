import React from 'react';
import NavBar from '../components/NavBar/NavBar';

const Balance = () => {
  return (
    <div className="page-container">
      <div className="balance-display">
        <h2>Your Balance</h2>
        <p className="sol-amount">0.000 SOL</p>
        <small>Connect wallet to see your actual balance</small>
      </div>
      <NavBar />
    </div>
  );
};

export default Balance;
