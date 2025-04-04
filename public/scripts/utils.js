// Format balance (e.g., 0.000 SOL)
export function formatBalance(value, currency = 'SOL') {
  return `${parseFloat(value).toFixed(3)} ${currency}`;
}

// Security warning tooltip
export function showSecurityWarning() {
  const warning = document.createElement('div');
  warning.className = 'security-warning';
  warning.innerHTML = `
    ⚠️ Never share your seed phrase with untrusted parties!
  `;
  document.body.appendChild(warning);
  
  setTimeout(() => warning.remove(), 5000);
}
