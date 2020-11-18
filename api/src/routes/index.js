const { Router } = require("express");

const searchRouter = require("./search.js");
const productRouter = require('./products.js');
const paymentRouter = require('./payments.js');

const router = Router();

router.use("/search", searchRouter);
router.use('/products', productRouter);
router.use('/payments', paymentRouter);

module.exports = router;