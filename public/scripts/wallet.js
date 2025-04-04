// Validate seed phrase format (12/24 words)
export function validateSeedPhrase(phrase) {
  const words = phrase.trim().split(/\s+/g);
  const validLengths = [12, 24];
  
  if (!validLengths.includes(words.length)) {
    return {
      isValid: false,
      error: "Seed phrase must be 12 or 24 words"
    };
  }

  // Basic BIP-39 wordlist check (simplified)
  const bip39Words = new Set(/* ...import actual BIP-39 wordlist... */);
  const invalidWords = words.filter(word => !bip39Words.has(word));

  return {
    isValid: invalidWords.length === 0,
    error: invalidWords.length > 0 
      ? `Invalid words: ${invalidWords.join(', ')}` 
      : null
  };
}

// Mock wallet connection
export async function connectWallet(seedPhrase) {
  try {
    const validation = validateSeedPhrase(seedPhrase);
    if (!validation.isValid) throw new Error(validation.error);

    // Mock API call to backend
    const response = await fetch('/api/connect-wallet', {
      method: 'POST',
      body: JSON.stringify({ seedPhrase })
    });

    return await response.json();
  } catch (error) {
    console.error("Wallet connection failed:", error);
    throw error;
  }
}
