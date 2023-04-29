/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.createTable('parties', (table) => {
  table.increments("post_id");
  table.integer('user_id').notNullable();
  table.string('image_file_location');
  table.string('post_description').notNullable();
  table.string('post_location');
  table.timestamps();
});
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable('parties');
