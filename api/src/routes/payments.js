require('dotenv').config();
const server = require("express").Router();
const mercadopago = require('mercadopago');

const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

server.post('/new', (req, res) => {
    const data = req.body

    if (!data.items) {
        res.sendStatus(500);
    } else {
        mercadopago.configure({
            access_token: ACCESS_TOKEN,
        });
        mercadopago.preferences.create(data)
            .then(response => res.status(200).json({ id: response.body.id }))
            .catch(error => response.status(404).json({ error, }))
    }
})

module.exports = server;