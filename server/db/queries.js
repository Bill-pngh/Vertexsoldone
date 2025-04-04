module.exports = {
  CREATE_WALLET_TABLE: `
    CREATE TABLE IF NOT EXISTS wallets (
      id SERIAL PRIMARY KEY,
      user_id INTEGER REFERENCES users(id),
      encrypted_seed TEXT NOT NULL,
      balance DECIMAL(18, 9) DEFAULT 0,
      created_at TIMESTAMPTZ NOT NULL,
      updated_at TIMESTAMPTZ NOT NULL
    )
  `,

  CREATE_USERS_TABLE: `
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      telegram_id VARCHAR(255) UNIQUE NOT NULL,
      created_at TIMESTAMPTZ NOT NULL
    )
  `
};
