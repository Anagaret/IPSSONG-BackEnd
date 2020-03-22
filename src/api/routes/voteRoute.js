module.exports = (server) => {
  const voteController = require('../controllers/voteController');

  server.route('/votes')
  .get(voteController.get_all_vote);

  server.route('/vote/:song_id')
  .get(voteController.get_all_song_vote);

  server.route('/vote/:user_id/:song_id/:vote')
  .post(voteController.add_a_vote);
}
