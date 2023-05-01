const listParties = async (req, res) => {
  const { Party } = req.db;
  const parties = await Party.list();
  res.send(parties);
};

module.exports = listParties;
