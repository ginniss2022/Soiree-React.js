const express = require('express');
// eslint-disable-next-line import/no-extraneous-dependencies
const upload = require('./middleware/multer');
const userController = require('./controllers/user');
const partyController = require('./controllers/parties/index');
const rsvpController = require("./controllers/rsvp");
const addModels = require('./middleware/add-models');
const checkAuthentication = require('./middleware/check-authentication');

const Router = express.Router();
Router.use(addModels);

Router.get('/cookieCounter', (req, res) => {
  const { session } = req;
  console.log(session);
  session.viewCount = (session.viewCount || 0) + 1;
  console.log(session.viewCount);
  res.status(200).send({ count: session.viewCount });
});
/// USER
// Create
Router.post('/users', userController.create);
Router.post('/users/login', userController.login);

// Router.post('upload', upload.single("image"));
// Read
Router.get('/users', userController.list);
Router.get('/users/:id', userController.show);
Router.get('/me', userController.showMe);
// checkAuthentication middleware is applied to only to this route (and /logged-in-secret)
Router.get('/logged-in-secret', checkAuthentication, (req, res) => {
  res.send({ msg: '<button>Click me</button>' });
});

// Update
Router.patch('/users/id', checkAuthentication, userController.update);

// Delete
Router.delete('/users/logout', userController.logout);

// Parties
// Create
Router.post('/parties', upload.single('file'), partyController.create);

// Read
Router.get('/parties', partyController.list);
Router.get('/parties/id', partyController.findById);

// Update
Router.patch('/parties/id', partyController.update);

// Delete
Router.delete('/parties/id', partyController.destroy);

// RSVP methods
Router.get('/rsvp', rsvpController.list);
Router.delete('/rsvp', rsvpController.destroy);
Router.post('/rsvp', rsvpController.create);

module.exports = Router;

// Commit Purposes
