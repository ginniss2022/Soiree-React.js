const createParty = async (req, res) => {
  console.log("made it to handler function");
  const {
    db: { Party },
    body: { party_name, userId, post_description, post_location },
    file: { path },
  } = req;

  const image_file_location = path;

  const party = await Party.create(
    party_name,
    userId,
    image_file_location,
    post_description,
    post_location,
  );

  res.send(party);
};

module.exports = createParty;
