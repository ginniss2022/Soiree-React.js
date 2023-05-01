const findById = async (req, res) => {
  const {
    db: { Party },
    body: { post_id },
  } = req;

  const party = await Party.findByName(post_id);

  res.send(party);
};

module.exports = findById;
