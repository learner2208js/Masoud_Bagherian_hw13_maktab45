const express = require('express');
const { getAllUsers } = require('./../controllers/adminController');
const router = express.Router();

// router.route('/users').get(getAllUsers);
router.get('/users', getAllUsers);

module.exports = router;
