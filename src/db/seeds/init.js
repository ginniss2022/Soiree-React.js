const User = require('../models/user');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async (knex) => {
  await User.deleteAll();
  await User.create('Rick Owens', 'RokkingRicks');
  await User.create('Travis Scott', 'A$tro Wrld');
  await User.create('Lebron James', 'Cavs123');
  await User.create('Beyonce', 'SingleLadies456');
};
