// Seed phrase validation (BIP-39 standard)
export const validateSeedPhrase = (phrase) => {
  const words = phrase.trim().split(/\s+/g);
  const validLengths = [12, 15, 18, 21, 24];
  
  if (!validLengths.includes(words.length)) {
    return {
      isValid: false,
      error: "Seed phrase must be 12, 15, 18, 21, or 24 words"
    };
  }

  // In production, use actual BIP-39 wordlist
  const testWordRegex = /^[a-z]+$/;
  const invalidWords = words.filter(word => !testWordRegex.test(word));

  return {
    isValid: invalidWords.length === 0,
    error: invalidWords.length > 0 
      ? `Invalid words detected` 
      : null,
    wordCount: words.length
  };
};

// SOL address validation
export const validateSolanaAddress = (address) => {
  return /^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(address);
};
