const axios = require('axios');
const server = require("express").Router();

const PATH_BASE = process.env.PATH_BASE;

server.get('/', (req, res) => {
    const searchTerm = req.query.q;
    const categoryId = req.query.category;

    let paging = req.query.page;
    if (!paging) paging = 1;

    let request = '';
    if (!searchTerm) {
        request = PATH_BASE + '/sites/MLA/search?category=' + categoryId + '&limit=30&offset=' + paging
    } else {
        request = PATH_BASE + '/sites/MLA/search?q=' + searchTerm + '&limit=30&offset=' + paging
    }
    axios.get(request)
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
                        thumbnail: result.thumbnail.replace("-I", "-O"),
                        condition: result.condition,
                    }
                )
            });
            res.status(200).json({ status: 'OK', results: arrResponse });
        })
        .catch(err => res.status(500).json({ message: 'unknown error', error: err }));
});

server.get('/categorys', async (req, res) => {
    let promises = [];
    let response = await axios.get(PATH_BASE + '/sites/MLA/categories');
    let results = response.data;

    results.map(result => {
        promises.push(axios.get(PATH_BASE + '/categories/' + result.id))
    })
    let allPromises = await Promise.all(promises)
    var arrResults = [];

    allPromises.map(promise => arrResults.push({
        id: promise.data.id,
        name: promise.data.name,
        image: promise.data.picture,
    }))
    res.status(200).json({ results: arrResults })
})

module.exports = server;