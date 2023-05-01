const findById = async (req, res) => {
  console.log("made it here");
  const {
    db: { Party },
    body: { post_id },
  } = req;

  const party = await Party.findById(post_id);

  res.send(party);
};

module.exports = findById;
