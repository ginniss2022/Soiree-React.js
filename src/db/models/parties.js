const knex = require('../knex');

class Party {
  // eslint-disable-next-line max-len
  constructor({ party_name, post_id, user_id, image_file_location, post_description, post_location }) {
    this.post_id = post_id;
    this.party_name = party_name;
    this.user_id = user_id;
    this.image_file_location = image_file_location;
    this.post_description = post_description;
    this.post_location = post_location;
  }

  // Create
  static async create(party_name, user_id, image_file_location, post_description, post_location) {
    // eslint-disable-next-line no-param-reassign
    party_name = party_name.toLowerCase();
    try {
      const query = `INSERT INTO parties 
      (party_name, user_id, image_file_location, post_description, post_location) 
      VALUES (?, ?, ?, ?, ?) 
      RETURNING *`;
      // eslint-disable-next-line max-len
      const { rows: [party] } = await knex.raw(query, [party_name, user_id, image_file_location, post_description, post_location]);
      return new Party(party);
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  // Read
  static async findByName(party_name) {
    try {
      const query = `SELECT * FROM parties WHERE party_name = ?;`;
      const { rows: [party] } = await knex.raw(query, [party_name]);
      return party ? new Party(party) : null;
    } catch (err) {
      console.log(err);
    }
  }

  static async findById(post_id) {
    try {
      const query = `SELECT * FROM parties WHERE post_id = ?;`;
      const { rows: [party] } = await knex.raw(query, [post_id]);
      return party ? new Party(party) : null;
    } catch (err) {
      console.log(err);
    }
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

  // Update
  static async update(post_id, coulumn, value) {
    try {
      const query = `UPDATE parties SET ${coulumn} = ? WHERE post_id = ${post_id} RETURNING *;`;
      const { rows: [party] } = await knex.raw(query, [value]);
      return new Party(party);
    } catch (err) {
      console.log(err);
    }
  }

  // Delete
  static async destroy(post_id) {
    try {
      const query = 'DELETE FROM parties WHERE post_id = ? RETURNING *;';
      const { rows } = await knex.raw(query, [post_id]);
      return rows.map((party) => new Party(party));
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = Party;
