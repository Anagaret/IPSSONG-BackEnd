const Comment = require('../models/commentModel');

exports.list_all_song_comments = (req, res) => {
  Comment.find({song_id: req.params.song_id}, (error, comments) => {
    if(error){
      res.status(500);
      console.log(error);
      res.json({message: "Erreur serveur."})
    }
    else{
      res.status(200);
      res.json(comments)
    }
  })
}

exports.create_a_comment = (req, res) => {
  let new_comment = new Comment(req.body);
  new_comment.post_id = req.params.song_id;

  new_comment.save((error, comment) => {
    if(error){
      res.status(500);
      console.log(error);
      res.json({message: "Erreur serveur."})
    }
    else{
      res.status(201);
      res.json(comment);
    }
  })
}

exports.get_a_comment = (req, res) => {
  Comment.findById(req.params.comment_id, (error, comment) => {
    if(error){
      res.status(500);
      console.log(error);
      res.json({message: "Erreur serveur."})
    }
    else{
      res.status(200);
      res.json(comment)
    }
  })
}
