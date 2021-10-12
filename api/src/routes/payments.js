require('dotenv').config();
const axios = require('axios');
const server = require("express").Router();

const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

server.post('/new', async (req, res) => {

    const { title, quantity, unit_price } = req.body;
    const result = await axios.post(
        `https://api.mercadopago.com/checkout/preferences?access_token=${ACCESS_TOKEN}`,
        {
            items: [
                {
                    title,
                    quantity,
                    currency_id: "ARS",
                    unit_price,
                },
            ],
            external_reference: {
                id: 'clone-mercadolibre',
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
    res.status(201).json({ payment_link: result.data.init_point });
})

module.exports = server;