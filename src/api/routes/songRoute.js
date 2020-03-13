module.exports = (server) => {
  const songController = require('../controllers/songController');

  server.route('/songs')
  .get(songController.list_all_song)
  .post(songController.create_a_song);

 server.route('/songs/:song_id') // req.params.song_id
 .get(songController.get_a_song)
 .delete(songController.delete_a_song);

 server.route('/songs/:song_id/:vote')
 .put(songController.set_a_song);

 server.route('/top/songs')
 .get(songController.get_top_six_song);
}

