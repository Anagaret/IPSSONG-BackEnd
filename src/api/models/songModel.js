const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let songSchema = new Schema({
  name: {
    type: String,
    required: "Le nom est requis"
  },
  title: {
    type: String,
    required: "Le titre est obligatoire"
  },
  lien: {
    type: String,
    required: "Le lien est obligatoire"
  },
  vote_plus: { // A modifier lorsque le front sera MAJ
    type: Number,
    default: 0
  },
  vote_moins: { // A modifier lorsque le front sera MAJ
    type: Number,
    default: 0
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Song', songSchema);
