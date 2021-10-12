require('dotenv').config();
const axios = require('axios');
const server = require("express").Router();

const PATH_BASE = process.env.PATH_BASE;

server.get('/:id', (req, res) => {
    const id = req.params.id;
    if (!id) {
        res.sendStatus(500);
    } else {
        axios.get(PATH_BASE + '/items/' + id)
            .then(response => {
                const objResponse = {
                    id: response.data.id,
                    site: response.data.site_id,
                    title: response.data.title,
                    price: response.data.price,
                    currency: response.data.currency_id,
                    stock: response.data.available_quantity,
                    sold: response.data.sold_quantity,
                    condition: response.data.condition,
                    images: response.data.pictures.map(picture => {
                        return {
                            id: picture.id,
                            xl: picture.secure_url.replace('-O', '-F'),
                            md: picture.secure_url,
                            xs: picture.secure_url.replace('-O', '-R'),
                        }
                    }),
                }
                res.status(200).json({ results: objResponse });
            })
            .catch(err => res.status(404))
    }
})

module.exports = server;