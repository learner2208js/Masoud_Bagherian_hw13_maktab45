const express = require('express');
const {
  showName,
  showAllUsers,
  loginUser,
} = require('./../controllers/userController');
const router = express.Router();

router.route('/').get(showAllUsers);
router.route('/login').get(loginUser);
router.route('/:name').get(showName);

module.exports = router;
