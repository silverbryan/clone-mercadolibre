// require('dotenv').config();
const axios = require('axios');
const server = require("express").Router();

// const { PATH_BASE, LIMIT_RESULTS } = process.env;

server.get('/', (req, res) => {
    const searchTerm = req.query.q;
    axios.get(PATH_BASE + '/sites/MLA/search?q=' + searchTerm)
        .then(response => {
            res.status(200).json({ res: response.data.results });
        })
        .catch(err => res.status(500).json({ message: 'unknown error', error: err }));
});

module.exports = server;