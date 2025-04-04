const express = require('express');
const router = express.Router();
const Wallet = require('../db/models/Wallet');

// Get wallet details
router.get('/:walletId', async (req, res) => {
  try {
    const wallet = await Wallet.findById(req.params.walletId);
    if (!wallet) {
      return res.status(404).json({ error: 'Wallet not found' });
    }

    // Never return the encrypted seed phrase
    const { encrypted_seed, ...safeWalletData } = wallet;
    res.json(safeWalletData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch wallet' });
  }
});

// Track top holders (mock implementation)
router.get('/top-holders/:token', async (req, res) => {
  try {
    // In production: Query blockchain analytics API
    const mockData = {
      token: req.params.token,
      holders: [
        { address: 'Hxy...1a2', amount: 42000000, percent: 12.5 },
        { address: 'Gzw...3b4', amount: 38000000, percent: 11.2 }
      ],
      updatedAt: new Date()
    };
    res.json(mockData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch top holders' });
  }
});

module.exports = router;
