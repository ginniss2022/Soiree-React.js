const list = async (req, res) => {
  const {
    db: { RSVP },
    body: { user_id },
  } = req;

  const rsvpList = await RSVP.list(user_id);
  res.send(rsvpList);
};

module.exports = list;
