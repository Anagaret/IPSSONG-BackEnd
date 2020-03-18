module.exports = (server) => {
  const commentController = require('../controllers/commentController');

 server.route('/songs/:song_id/comments') // req.params.song_id
 .get(commentController.list_all_song_comments)
 .post(commentController.create_a_comment);
}
