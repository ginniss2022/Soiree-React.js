const createParty = async (req, res) => {
  console.log("made it to handler function");
  const {
    db: { Party },
    body: { party_name, userId, post_description, post_location },
    file: { path },
  } = req;
<<<<<<< HEAD

  const image_file_location = path;

=======
  const image_file_location = path.split("/")[2];
>>>>>>> 3522eb5776fcdd1ac256c538249741351b3515bc
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
