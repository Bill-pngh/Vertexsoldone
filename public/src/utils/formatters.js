// Format SOL balance (0.000 SOL)
export const formatBalance = (lamports) => {
  return `${(lamports / 1000000000).toFixed(3)} SOL`;
};

// Format large numbers (1.2M, 3.4K)
export const formatLargeNumber = (num) => {
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(1)}M`;
  }
  if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}K`;
  }
  return num.toString();
};

// Truncate wallet addresses (0xab...1234)
export const truncateAddress = (address, start = 4, end = 4) => {
  return `${address.slice(0, start)}...${address.slice(-end)}`;
};
