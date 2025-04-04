import React, { useState } from 'react';
import WalletForm from '../components/WalletForm/WalletForm';
import NavBar from '../components/NavBar/NavBar';

const ConnectWallet = () => {
  const [isConnected, setIsConnected] = useState(false);

  const handleConnect = (seedPhrase) => {
    // In a real app, this would call an API
    console.log("Connecting wallet with seed phrase:", seedPhrase);
    setIsConnected(true);
  };

  return (
    <div className="page-container">
      {isConnected ? (
        <div className="connection-success">
          <h2>Wallet Connected Successfully!</h2>
        </div>
      ) : (
        <WalletForm onConnect={handleConnect} />
      )}
      <NavBar />
    </div>
  );
};

export default ConnectWallet;
