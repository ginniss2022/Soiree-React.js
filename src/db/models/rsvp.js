const knex = require("../knex");

class RSVP {
  constructor(post_id, user_id) {
    this.post_id = post_id;
    this.user_id = user_id;
  }

  // Create
  static async create(post_id, user_id) {
    try {
      const query = `INSERT INTO rsvp (post_id, user_id) VALUES (?, ?) RETURNING *;`;
      const { rows: [rsvp] } = await knex.raw(query, [post_id, user_id]);
      return new RSVP(rsvp);
    } catch (err) {
      console.log(err);
    }
  }

  // READ
  static async list(user_id) {
    try {
      const query = `SELECT * FROM rsvp WHERE user_id = ?`;
      const { rows } = await knex.raw(query, [user_id]);
      return rows.map((rsvp) => new RSVP(rsvp));
    } catch (err) {
      console.log(err);
    }
  }

  // DELETE
  static async destroy(post_id) {
    try {
      const query = `DELETE FROM rsvp WHERE post_id = ? RETURNING *`;
      const [rows] = await knex.raw(query, [post_id]);
      return rows.map((rsvp) => new RSVP(rsvp));
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = RSVP;
