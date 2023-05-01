const User = require('../db/models/user');
const Party = require('../db/models/parties');

const addModels = (req, res, next) => {
  req.db = {
    User,
    Party,
  };
  next();
};

module.exports = addModels;
