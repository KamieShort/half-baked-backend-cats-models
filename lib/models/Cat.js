const pool = require('../utils/pool');

module.exports = class Cat {
  id;
  cat_name;
  cat_type;
  cat_url;
  cat_year;
  lives;
  isSidekick;

  constructor(row) {
    this.id = row.id;
    this.cat_name = row.cat_name;
    this.cat_type = row.cat_type;
    this.cat_url = row.cat_url;
    this.cat_year = row.cat_year;
    this.lives = row.lives;
    this.is_sidekick = row.is_sidekick;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT id, cat_name FROM cats;');
    return rows.map((row) => new Cat(row));
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM cats WHERE id=$1', [id]);
    if (!rows[0]) return null;

    return new Cat(rows[0]);
  }
};
