const createRsvp = async (req, res) => {
  const {
    db: { RSVP },
    body: { post_id, user_id },
  } = req;
  const rsvp = await RSVP.create(post_id, user_id);

  res.send(rsvp);
};

module.exports = createRsvp;
