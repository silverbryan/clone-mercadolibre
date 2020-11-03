const { Router } = require("express");

const searchRouter = require("./search.js");
// const productRouter = require('./products.js');

const router = Router();

router.use("/search", searchRouter);
// router.use('/products', productRouter);

module.exports = router;