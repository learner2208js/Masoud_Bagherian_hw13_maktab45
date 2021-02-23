const express = require('express');
const { sendAboutPage } = require('./../controllers/aboutController');
const router = express.Router();

router.get('/', sendAboutPage);

module.exports = router;
