require('dotenv').config();
const axios = require('axios');
const server = require("express").Router();

const { PATH_BASE } = process.env;

server.get('/', (req, res) => {
    const searchTerm = req.query.q;
    const paging = req.query.page;

    axios.get(PATH_BASE + '/sites/MLA/search?q=' + searchTerm + '&limit=30&offset=' + paging)
        .then(response => {
            var data = response.data.results;
            var arrResponse = [];
            data.map(result => {
                arrResponse.push(
                    {
                        id: result.id,
                        title: result.title,
                        price: result.price,
                        currency_id: result.currency_id,
                        available_quantity: result.available_quantity,
                        thumbnail: result.thumbnail,
                        condition: result.condition,
                    }
                )
            });
            res.status(200).json({ status: 'OK', results: arrResponse });
        })
        .catch(err => res.status(500).json({ message: 'unknown error', error: err }));
});

module.exports = server;