const Artist = require('../Artist');

module.exports = (req, res) => {
  const mariah = new Artist({ name: 'Mariah Carrey' });

  mariah
    .save()
    .then(artist => {
      res.send(artist);
    })
    .catch(err => {
      res.status(500).send(err);
    });
};
