const Party = require('../models/parties');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async (knex) => {
  // Deletes ALL existing entries
  await Party.destroyall();
  await Party.create("AstroWord", 2, "home/path/images", "ROCK OUT", "Houston");
  await Party.create("Met Gala", 1, "home/path/images", "Rocking Rick", "New York");
  await Party.create("Nba Finals", 3, "home/path/images", "GOAT PErformance", "Los Angeles");
  await Party.create("Rolling Loud", 2, "home/path/images", "Chillin /w yeat", "Toronto");
  await Party.create("BET Awards", 4, "home/path/images", "Wonderful Night", "Santa Fe");
};
