const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
  name: {
    type: String,
    required: "Le nom est requis"
  },
  firstname: {
    type: String,
    required: "Le prénom est requis"
  },
  password: {
    type: String,
    required: "Le mot de passe est requis"
  },
  classe: {
    type: String,
    required: "La classe est obligatoire"
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', userSchema);
