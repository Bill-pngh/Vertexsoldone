import React, { useState } from 'react';
import { validateSeedPhrase } from '../../public/scripts/wallet';
import './WalletForm.css';

const WalletForm = ({ onConnect }) => {
  const [seedPhrase, setSeedPhrase] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validateSeedPhrase(seedPhrase);
    if (!validation.isValid) {
      setError(validation.error);
      return;
    }
    onConnect(seedPhrase);
  };

  return (
    <form onSubmit={handleSubmit} className="wallet-form">
      <label>
        Enter your seed phrase:
        <textarea
          value={seedPhrase}
          onChange={(e) => setSeedPhrase(e.target.value)}
          placeholder="e.g. word1 word2 ... word12"
        />
      </label>
      {error && <p className="error">{error}</p>}
      <div className="security-warning">
        ⚠️ Never share your seed phrase with untrusted parties!
      </div>
      <Button 
        text="Connect Wallet" 
        variant="primary" 
        type="submit" 
      />
    </form>
  );
};

export default WalletForm;
