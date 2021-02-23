const express = require('express');
const {
  sendMoviePage,
  sendStaticFile,
  getMovie,
  checkMovieAvailable,
} = require('./../controllers/movieController');
const router = express.Router();

router.use('/assets', sendStaticFile);
router.get('/:id', sendMoviePage);
router.get('/api/v1/movies/:id', checkMovieAvailable, getMovie);

module.exports = router;
