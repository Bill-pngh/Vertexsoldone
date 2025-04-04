import CryptoJS from 'crypto-js';

const SECRET_KEY = process.env.REACT_APP_ENCRYPTION_KEY;

// Encrypt seed phrase before storage
export const encryptSeedPhrase = (seedPhrase) => {
  return CryptoJS.AES.encrypt(seedPhrase, SECRET_KEY).toString();
};

// Decrypt for wallet connection
export const decryptSeedPhrase = (ciphertext) => {
  const bytes = CryptoJS.AES.decrypt(ciphertext, SECRET_KEY);
  return bytes.toString(CryptoJS.enc.Utf8);
};

// Secure session storage wrapper
export const secureStorage = {
  set: (key, value) => {
    const encrypted = encryptSeedPhrase(value);
    sessionStorage.setItem(key, encrypted);
  },
  get: (key) => {
    const data = sessionStorage.getItem(key);
    return data ? decryptSeedPhrase(data) : null;
  }
};
