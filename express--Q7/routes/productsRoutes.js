const express = require('express');
const { sendProductsPage } = require('./../controllers/productsController');
const router = express.Router();

router.get('/', sendProductsPage);

module.exports = router;
