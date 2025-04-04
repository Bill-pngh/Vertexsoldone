const express = require('express');
const router = express.Router();
const axios = require('axios');

// Get PEPE chart data
router.get('/pepe', async (req, res) => {
  try {
    // In production: Use CoinGecko or other API
    const mockData = {
      prices: [
        [1625097600000, 0.00000123],
        [1625184000000, 0.00000145],
        // ... more data points
      ],
      market_cap: 42000000,
      volume: 1200000
    };
    
    res.json(mockData);
  } catch (error) {
    console.error('Chart data error:', error);
    res.status(500).json({ error: 'Failed to fetch chart data' });
  }
});

module.exports = router;
