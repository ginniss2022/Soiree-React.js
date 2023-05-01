const destroy = async (req, res) => {
  console.log("made it here");
  const {
    db: { Party },
    body: { post_id },
  } = req;

  const updatedList = await Party.destroy(post_id);
  res.send(updatedList);
};

module.exports = destroy;
