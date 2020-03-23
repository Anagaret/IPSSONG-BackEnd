module.exports = (server) => {
  const userController = require('../controllers/userController');

  server.route('/user/:user_id') // req.params.song_id
  .get(userController.get_a_user);

  server.route('/user/connection/:email')
  .get(userController.connection);

  server.route('/user/inscription')
  .post(userController.create_a_user);

  server.route('/users')
  .get(userController.get_all_user);
}
