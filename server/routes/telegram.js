const axios = require('axios');

exports.initWebhook = async () => {
  try {
    const response = await axios.post(
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/setWebhook`,
      {
        url: `${process.env.BASE_URL}/telegram-webhook`,
        allowed_updates: ['message'],
        secret_token: process.env.TELEGRAM_SECRET_TOKEN
      }
    );
    console.log('✅ Webhook configured:', response.data.description);
  } catch (error) {
    console.error('❌ Webhook setup failed:', error.message);
  }
};

// Webhook handler
module.exports = require('express').Router()
  .post('/telegram-webhook', (req, res) => {
    // Verify secret token
    if (req.headers['x-telegram-bot-api-secret-token'] !== process.env.TELEGRAM_SECRET_TOKEN) {
      return res.sendStatus(403);
    }
    
    // Process update
    console.log('Received update:', req.body);
    res.sendStatus(200);
  });
