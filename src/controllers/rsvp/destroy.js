const destroy = async (req, res) => {
  const {
    db: { RSVP },
    body: { post_id },
  } = req;

  const updatedrsvp = await RSVP.destroy(post_id);
  res.send(updatedrsvp);
};

module.exports = destroy;
