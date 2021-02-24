const express = require('express');
const {
  sendMoviePage,
  sendStaticFile,
} = require('./../controllers/movieController');
const router = express.Router();

// router.use('/assets', sendStaticFile);
router.get('/:id', sendMoviePage);

module.exports = router;
