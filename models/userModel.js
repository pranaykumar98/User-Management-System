const pool = require("../config/db");

const User = {
  async createUser(name, email, hashedPassword) {
    const [result] = await pool.query("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", [name, email, hashedPassword]);
    return result.insertId;
  },

  async getAllUsers(limit, offset) {
    const [rows] = await pool.query("SELECT id, name, email FROM users LIMIT ? OFFSET ?", [limit, offset]);
    return rows;
  },

  async getUserById(id) {
    const [rows] = await pool.query("SELECT id, name, email FROM users WHERE id = ?", [id]);
    return rows[0];
  },

  async updateUser(id, { name, email, password }) {
    await pool.query("UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?", [name, email, password, id]);
  },
  

  async deleteUser(id) {
    await pool.query("DELETE FROM users WHERE id = ?", [id]);
  },

  async findByEmail(email) {
    const [rows] = await pool.query("SELECT * FROM users WHERE email = ?", [email]);
    return rows[0];
  },
};

module.exports = User;
