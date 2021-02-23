const express = require('express');
const { sendServicesPage } = require('./../controllers/servicesController');
const router = express.Router();

router.get('/', sendServicesPage);

module.exports = router;
