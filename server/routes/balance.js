const express = require('express');
const router = express.Router();
const Wallet = require('../db/models/Wallet');

// Get current balance
router.get('/:walletId', async (req, res) => {
  try {
    const wallet = await Wallet.findById(req.params.walletId);
    if (!wallet) {
      return res.status(404).json({ error: 'Wallet not found' });
    }

    res.json({
      balance: wallet.balance,
      currency: 'SOL',
      updatedAt: wallet.updated_at
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch balance' });
  }
});

// Refresh balance from blockchain
router.post('/:walletId/refresh', async (req, res) => {
  try {
    // In production: Query Solana blockchain
    const updatedBalance = Math.random() * 10; // Mock value
    
    await Wallet.updateBalance(
      req.params.walletId,
      updatedBalance
    );

    res.json({
      success: true,
      newBalance: updatedBalance
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to refresh balance' });
  }
});

module.exports = router;
