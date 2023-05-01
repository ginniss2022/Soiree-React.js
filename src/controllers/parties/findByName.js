const findByName = async (req, res) => {
  const {
    db: { Party },
    body: { party_name },
  } = req;

  const party = await Party.findByName(party_name);

  res.send(party);
};

module.exports = findByName;
