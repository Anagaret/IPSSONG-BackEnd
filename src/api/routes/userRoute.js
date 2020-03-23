module.exports = (server) => {
  const userController = require('../controllers/userController');

  server.route('/user/connection/:user_id') // req.params.song_id
  .post(userController.get_a_user);

  server.route('/user/inscription')
  .post(userController.create_a_user);

  server.route('/users')
  .get(userController.get_all_user);
}
