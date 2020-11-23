require('dotenv').config();
const axios = require('axios');
const server = require("express").Router();
const mercadopago = require('mercadopago');

const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

server.post('/new', async (req, res) => {
    const result = await axios.post(
        `https://api.mercadopago.com/checkout/preferences?access_token=${ACCESS_TOKEN}`,
        {
            items: [
                {
                    title: 'Mi Producto',
                    quantity: 1,
                    currency_id: "ARS",
                    unit_price: 500,
                },
            ],
            external_reference: {
                id: 'ksdkfkdsk320403024',
            },
            back_urls: {
                success: "https://www.tu-sitio/success",
            },
            auto_return: "approved",
            payment_methods: {
                installments: 1,
                default_installments: 1,
            },
        }
    );

    res.status(201).redirect(result.data.init_point);
})

module.exports = server;