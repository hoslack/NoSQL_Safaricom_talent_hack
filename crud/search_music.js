const Music = require('../Music');
module.exports = (req, res) => {
    Music.findById('5a9a6bb2f005f53debf2463e').then(music => {
        res.send(music);
    });
};
