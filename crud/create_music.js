const Music = require('../Music');

module.exports = (req, res) => {
  const song = new Music({ title: 'Goodbye', artist: 'Mariah Carrey', album: 'red' });

  song
    .save()
    .then(song => {
      res.send(song);
    })
    .catch(err => {
      res.status(500).send(err);
    });
};
