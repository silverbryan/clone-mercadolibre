const server = require("express").Router();

server.post('/:id', (req, res) => {
    res.sendStatus(200);
})

module.exports = server;