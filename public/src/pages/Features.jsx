import React from 'react';
import NavBar from '../components/NavBar/NavBar';

const Features = () => {
  return (
    <div className="page-container">
      <div className="features-container">
        <h2>Advanced Features</h2>
        
        <div className="feature-card">
          <h3>📊 Top Holders Tracking</h3>
          <p>Monitor wallets of top PEPE holders with real-time alerts</p>
        </div>

        <div className="feature-card">
          <h3>🎮 Trade Trainer</h3>
          <p>Practice trading with historical data and AI feedback</p>
        </div>
      </div>
      <NavBar />
    </div>
  );
};

export default Features;
