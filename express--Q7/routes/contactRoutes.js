const express = require('express');
const { sendContactPage } = require('./../controllers/contactController');
const router = express.Router();

router.get('/', sendContactPage);

module.exports = router;
