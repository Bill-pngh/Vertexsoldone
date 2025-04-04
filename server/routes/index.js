const express = require('express');
const router = express.Router();

// Import route modules
const authRoutes = require('./auth');
const walletRoutes = require('./wallet');
const chartRoutes = require('./chart');
const balanceRoutes = require('./balance');

// API versioning
router.use('/v1/auth', authRoutes);
router.use('/v1/wallet', walletRoutes);
router.use('/v1/chart', chartRoutes);
router.use('/v1/balance', balanceRoutes);

// Health check
router.get('/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date() });
});

// 404 handler
router.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

module.exports = router;
