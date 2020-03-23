const Vote = require('../models/voteModel');

exports.get_all_song_vote = (req, res) => {
  Vote.find({song_id: req.params.song_id}, (error, vote) => {
    if(error){
      res.status(500);
      console.log(error);
      res.json({message: "Erreur serveur."})
    }
    else{
      res.status(200);
      res.json(vote);
    }
  })
}

exports.get_all_vote = (req, res) => {
  Vote.find({}, (error, vote) => {
    if(error){
      res.status(500);
      console.log(error);
      res.json({message: "Erreur serveur."});
    }
    else{
      res.status(200);
      res.json(vote);
    }
  })
}

exports.add_a_vote = (req, res) => {
  let new_vote = new Vote(req.body);
  new_vote.song_id = req.params.song_id;
  new_vote.user_id = req.params.user_id;
  new_vote.vote = req.params.vote;

  let cherche = Vote.findOne({song_id: req.params.song_id, user_id: req.params.user_id}, (error, vote) => {
    if(error){
      res.status(500);
      console.log(error);
      res.json({message: "Erreur alpha."})
    }
    else{
      let v = vote;
      if (v == null) {
        new_vote.save((error, v) => {
          if(error){
            res.status(500);
            console.log(error);
            res.json({message: "Erreur a."});
          }
          else{
            res.status(201);
            res.json(v);
          }
        });
      } else if (req.params.vote != String(v.vote)) {
        if (v.vote == true) {
          v.vote = false;
        } else {
          v.vote = true;
        }
        vote.save();
        res.json(vote);
      }
      res.json(vote);
    }
  });
}

exports.delete_a_vote = (req, res) => {
  let {vote_id} = req.params;
  Vote.remove({ _id : vote_id}, (error, user) => {
    if (error) {
      res.status(500);
      console.log(error);
      res.json({message: "Erreur serveur."})
    } else {
      res.status(200);
      res.json(user);
    }
  })
};
