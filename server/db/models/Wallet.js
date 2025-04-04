const db = require('../index');

class Wallet {
  static async create(userId, seedPhrase) {
    return db.query(
      `INSERT INTO wallets (user_id, encrypted_seed, created_at)
       VALUES ($1, $2, NOW())
       RETURNING *`,
      [userId, seedPhrase]
    );
  }

  static async findByUserId(userId) {
    return db.query(
      `SELECT * FROM wallets WHERE user_id = $1`,
      [userId]
    );
  }

  static async updateBalance(userId, newBalance) {
    return db.query(
      `UPDATE wallets SET balance = $1 WHERE user_id = $2`,
      [newBalance, userId]
    );
  }
}

module.exports = Wallet;
