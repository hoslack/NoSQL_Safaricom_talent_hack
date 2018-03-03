const Music = require('../Music');

module.exports = (req, res) => {
  Music.findByIdAndRemove('5a9a6bb2f005f53debf2463e') //example of id gotten after viewing all music
    .then(song => {
      res.send(song);
    })
    .catch(err => {
      res.status(500).send(err);
    });
};
