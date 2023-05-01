const destroy = async(req, res) =>{
  const {
    db: { Party },
    body: { post_id },
  } = req;

  const updatedList = await Party.destroy(post_id);
  res.send(updatedList);
};

module.exports = destroy;
