const db = require('../index');

class User {
  static async create(telegramId) {
    return db.query(
      `INSERT INTO users (telegram_id, created_at)
       VALUES ($1, NOW())
       RETURNING *`,
      [telegramId]
    );
  }

  static async findByTelegramId(telegramId) {
    return db.query(
      `SELECT * FROM users WHERE telegram_id = $1`,
      [telegramId]
    );
  }
}

module.exports = User;
