const Song = require('../models/songModel');

exports.list_all_song = (req, res) => {
  Song.find({}, (error, songs) => {
    if(error){
      res.status(500);
      console.log(error);
      res.json({message: "Erreur serveur."});
    }
    else{
      res.status(200);
      res.json(songs);
    }
  })
}

exports.create_a_song = (req, res) => {
  let new_post = new Song(req.body);

  new_post.save((error, song) => {
    if(error){
      res.status(500);
      console.log(error);
      res.json({message: "Erreur serveur."});
    }
    else{
      res.status(201);
      res.json(song);
    }
  })
}

exports.get_a_song = (req, res) => {
  // let post_id = req.params.post_id;
  let {song_id} = req.params;

  // Post.findOne({_id : post_id}, (error, posts) => {
  Song.findById(song_id, (error, song) => {
    if(error){
      res.status(500);
      console.log(error);
      res.json({message: "Erreur serveur."});
    }
    else{
      res.status(200);
      res.json(song);
    }
  })
}

exports.set_a_song = (req, res) => {
  let {song_id} = req.params;
  Song.findOne({_id : song_id}, (erreur, song) => {
    if (erreur) {
      res.status(500);
      console.log(erreur);
      res.json({message: "Erreur serveur."})
    } else {
      if (req.params.vote == "plus") {
        song.vote_plus += 1;
      } else {
        song.vote_moins += 1;
      }
      song.save();
      res.status(200);
      res.json(song);
    }
  })
}

exports.delete_a_song = (req, res) => {
  let {song_id} = req.params;
  Song.remove({ _id : song_id}, (error, song) => {
    if (error) {
      res.status(500);
      console.log(error);
      res.json({message: "Erreur serveur."})
    } else {
      res.status(200);
      res.json(song);
    }
  })
};

exports.get_top_six_song = (req, res) => {
  Song.find({}, (error, song) => {
    if(error){
      res.status(501);
      console.log(error);
      res.json({message: "Erreur serveur."});
    }
    else{
      res.status(200);
      res.json(song);
    }
  }).sort(
      {vote_plus : -1}
      ).limit(6)
};
