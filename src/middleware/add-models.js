const User = require('../db/models/user');
const Party = require('../db/models/parties');
const RSVP = require('../db/models/rsvp');

const addModels = (req, res, next) => {
  req.db = {
    User,
    Party,
    RSVP,
  };
  next();
};

module.exports = addModels;
