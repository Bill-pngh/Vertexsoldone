const express = require('express');
const router = express.Router();
const { encrypt, decrypt } = require('../../utils/encryption');
const Wallet = require('../db/models/Wallet');
const User = require('../db/models/User');

// Connect wallet with seed phrase
router.post('/connect', async (req, res) => {
  try {
    const { seedPhrase, telegramId } = req.body;

    // Validate input
    if (!seedPhrase || !telegramId) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Find or create user
    let user = await User.findByTelegramId(telegramId);
    if (!user) {
      user = await User.create(telegramId);
    }

    // Create wallet (seed phrase is encrypted in model hook)
    const wallet = await Wallet.create(user.id, seedPhrase);

    res.json({
      success: true,
      walletId: wallet.id,
      balance: wallet.balance
    });
  } catch (error) {
    console.error('Wallet connection error:', error);
    res.status(500).json({ error: 'Failed to connect wallet' });
  }
});

module.exports = router;
