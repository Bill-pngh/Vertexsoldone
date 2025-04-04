require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const { Pool } = require('pg');
const telegramRouter = require('./routes/telegram');
const routes = require('./routes');

// Initialize Express
const app = express();

// Database Connection
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

// Test DB connection
pool.query('SELECT NOW()')
  .then(() => console.log('✅ PostgreSQL connected'))
  .catch(err => console.error('❌ DB connection error', err.stack));

// Security Middleware
app.use(helmet());

// Enhanced CORS Configuration
const allowedOrigins = [
  'https://web.telegram.org',
  'https://oauth.telegram.org',
  'https://telegram.org'
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.some(allowed => origin.startsWith(allowed))) {
      callback(null, true);
    } else {
      console.warn(`Blocked CORS: ${origin}`);
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Rate Limiting
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'Too many requests, please try again later'
});

// Body Parsing
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', apiLimiter, routes);
app.use('/telegram-webhook', telegramRouter); // Telegram-specific routes

// Health Check
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'operational',
    db: pool ? 'connected' : 'disconnected',
    timestamp: new Date().toISOString()
  });
});

// Error Handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start Server
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  require('./routes/telegram').initWebhook(); // Initialize webhook after startup
});

// Graceful Shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received. Shutting down...');
  server.close(() => {
    pool.end();
    console.log('Server closed');
    process.exit(0);
  });
});

module.exports = app;
