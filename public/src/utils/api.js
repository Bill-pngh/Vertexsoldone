const API_BASE = process.env.REACT_APP_API_URL;

// Wallet connection API
export const connectWallet = async (encryptedSeed) => {
  const response = await fetch(`${API_BASE}/wallet/connect`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ seedPhrase: encryptedSeed })
  });

  if (!response.ok) {
    throw new Error('Wallet connection failed');
  }

  return response.json();
};

// Fetch PEPE chart data
export const getPepeChartData = async () => {
  const response = await fetch(`${API_BASE}/chart/pepe`);
  return response.json();
};

// Get user balance
export const fetchBalance = async (walletAddress) => {
  const response = await fetch(`${API_BASE}/balance/${walletAddress}`);
  return response.json();
};
