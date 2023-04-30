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

  static async list() {
    try {
      const { rows } = await knex.raw(`SELECT * FROM parties;`);
      return rows.map((party) => new Party(party));
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  static async create(party_name, user_id, image_file_location, post_description, post_location) {
    console.log("made it to model");
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
}

module.exports = Party;
