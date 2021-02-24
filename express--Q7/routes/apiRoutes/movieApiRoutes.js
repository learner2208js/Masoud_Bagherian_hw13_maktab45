const express = require('express');
const {
  getAllMovies,
  checkMovieAvailable,
  getMovie,
} = require('./../../controllers/movieController');
const apiRouter = express.Router();

apiRouter.route('/').get(getAllMovies);
apiRouter.get('/:id', checkMovieAvailable, getMovie);
module.exports = apiRouter;
