module.exports = (server) => {
  const userController = require('../controllers/userController');

  server.route('/connection') // req.params.song_id
  .post(userController.verify_connaction);

  server.route('/inscription')
  .post(userController.create_one_user);
}
