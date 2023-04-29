const knex = require('../knex');

class Party {
  constructor({post_id, user_id, image_file_location, post_description, post_location }) {
    this.post_id = post_id;
    this.user_id = user_id;
    this.image_file_location = image_file_location;
    this.post_description = post_description;
    this.post_location = post_location;
  }

  static async list() {
    try {
      const { rows } = await knex.raw(`SELECT * FROM parties;`);
      return rows.map((party) => new Party(party));
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  static async create(user_id, image_file_location, post_description, post_location) {
    console.log("made it to model");
    try {
      const fillValues = [user_id, image_file_location, post_description, post_location];
      const query = `INSERT INTO parties (user_id, image_file_location, post_description, post_location) VALUES (?, ?, ?, ?) RETURNING *`;
      // const query = `INSERT INTO users (username, password_hash) VALUES (?, ?) RETURNING *`;
      // const result = knex.raw(query, fillValues);
      const { rows: [party] } = await knex.raw(query, fillValues);
      return new Party(party);
    } catch (err) {
      console.log(err);
      return null;
    }
  }
}

module.exports = Party;
