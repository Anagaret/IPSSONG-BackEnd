const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let voteSchema = new Schema({
  id_user: {
    type: String,
    required: "Veuillez renseigner votre nom d'utilisateur"
  },
  song_id: {
    type: String,
    required: "Quel est le titre de ce morceau ?"
  },
  vote: {
    type: Boolean,
  },
});

module.exports = mongoose.model('Vote', voteSchema);
