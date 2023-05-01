const update = async (req, res) => {
  const {
    db: { Party },
    body: { post_id, coulumn, value },
  } = req;

  const user = await Party.find(post_id, coulumn, value);
  res.send(user);
};

module.exports = update;
