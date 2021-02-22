const express = require('express');
const {
  checkRequest,
  CheckUserAvailable,
} = require('./../controllers/userController');
const router = express.Router();

router.post('/check-user', checkRequest, CheckUserAvailable);

module.exports = router;
