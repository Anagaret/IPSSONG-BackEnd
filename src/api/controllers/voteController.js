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
        res.json(vote)
      }
    })
  }

exports.add_a_vote = (req, res) => {
    let new_vote = new Vote(req.body);
    new_vote.post_id = req.params.song_id;
  
    new_vote.save((error, vote) => {
      if(error){
        res.status(500);
        console.log(error);
        res.json({message: "Erreur serveur."})
      }
      else{
        res.status(201);
        res.json(vote);
      }
    })
  }
  